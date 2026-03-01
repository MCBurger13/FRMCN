// middleware.js – Vercel Edge Middleware (native, no Next.js required)
// Docs: https://vercel.com/docs/functions/edge-middleware

// Public paths that don't require authentication
const PUBLIC_PATHS = ['/login.html', '/api/login', '/api/logout'];

async function verifyToken(encoded, secret) {
    try {
        const token = atob(encoded);
        const lastDot = token.lastIndexOf('.');
        if (lastDot === -1) return false;

        const payload = token.substring(0, lastDot);
        const sigHex = token.substring(lastDot + 1);

        const encoder = new TextEncoder();
        const keyData = encoder.encode(secret);
        const key = await crypto.subtle.importKey(
            'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
        );

        const sigBytes = new Uint8Array(
            sigHex.match(/.{1,2}/g).map((b) => parseInt(b, 16))
        );

        const data = encoder.encode(payload);
        return await crypto.subtle.verify('HMAC', key, sigBytes, data);
    } catch {
        return false;
    }
}

export default async function middleware(request) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Allow public paths through
    if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
        return; // continue
    }

    // Only protect HTML pages and root
    const isProtected = pathname === '/' || pathname.endsWith('.html');
    if (!isProtected) return;

    const cookieHeader = request.headers.get('cookie') || '';
    const authCookie = cookieHeader
        .split(';')
        .map((c) => c.trim())
        .find((c) => c.startsWith('auth_token='));

    if (!authCookie) {
        return Response.redirect(new URL('/login.html', request.url), 302);
    }

    const token = authCookie.split('=').slice(1).join('=');
    const secret = process.env.SESSION_SECRET || 'insecure-default-change-me';
    const valid = await verifyToken(token, secret);

    if (!valid) {
        return Response.redirect(new URL('/login.html', request.url), 302);
    }

    // Valid session — let the request through
    return;
}

export const config = {
    matcher: '/((?!_vercel|favicon.ico|.*\\.(?:css|js|png|jpg|jpeg|webp|svg|ico|woff2?|ttf)$).*)',
};

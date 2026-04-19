import { NextResponse } from 'next/server';

const USERS = [
    { username: 'BIEL', password: 'CURSOIA.G' },
    { username: 'ENRICONCEJO', password: 'CURSOIA.E' },
    { username: 'TONISOLIVELLAS', password: 'CURSOIA.T' },
    { username: 'AINABIBBILONI', password: 'CURSOIA.A' },
    { username: 'MILGUELLAZARO', password: 'CURSOIA.M' },
    { username: 'MARTINPIRIS', password: 'CURSOIA.M' },
    { username: 'LAURANEGRE', password: 'CURSOIA.L' }
];

async function signToken(payloadStr, secret) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const key = await crypto.subtle.importKey(
        'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const data = encoder.encode(payloadStr);
    const signature = await crypto.subtle.sign('HMAC', key, data);
    const sigHex = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
    return btoa(`${payloadStr}.${sigHex}`);
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        const user = USERS.find(
            (u) =>
                u.username.toUpperCase() === (username || '').toString().toUpperCase() &&
                u.password === password
        );

        if (user) {
            const payloadStr = JSON.stringify({
                username: user.username,
                exp: Date.now() + 1000 * 60 * 60 * 24 * 7 // 7 días
            });
            const secret = process.env.SESSION_SECRET || 'insecure-default-change-me';
            const token = await signToken(payloadStr, secret);

            const response = NextResponse.redirect(new URL('/index.html', request.url), 302);
            response.cookies.set('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            return response;
        }

        return NextResponse.redirect(new URL('/login.html?error=1', request.url), 302);
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.redirect(new URL('/login.html?error=1', request.url), 302);
    }
}

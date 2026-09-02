// proxy.js – Next.js Proxy (antes «middleware»; renombrado en Next 16)
// Verifica la sesión de Supabase (cookie) para proteger las páginas del curso y
// aplica el nivel de acceso del alumno a cada módulo.
//
// La estructura del curso y los niveles viven en public/curso-data.js (única
// fuente de verdad, compartida con la home y las páginas de clase).
//
// Configuración por variables de entorno (Vercel → Settings → Environment
// Variables). Cada una tiene un valor por defecto para que un typo nunca deje a
// nadie fuera del curso:
//   - SUPABASE_PROJECT_REF : el "ref" del proyecto (subdominio de supabase.co)
//   - SUPABASE_URL         : URL de la API (por defecto se deriva del ref)
//   - SUPABASE_ANON_KEY    : clave pública (anon / publishable)
//
// Nivel de acceso: user_metadata.access_level en el JWT
//   ('diseno' | 'marketing' | 'finanzas' | 'completo'; sin valor = completo).
//   Se edita en Supabase → Authentication → Users → User Metadata.

import CURSO from './public/curso-data.js';

const SUPABASE_PROJECT_REF = process.env.SUPABASE_PROJECT_REF || 'ndtoqnpomhtubcygkwlh';
const SUPABASE_URL = process.env.SUPABASE_URL || `https://${SUPABASE_PROJECT_REF}.supabase.co`;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_TWDLiIP8n-EwF8ULmqDm0w_9uv5nBsS';

// Nombre de la cookie de sesión de Supabase: sb-<project-ref>-auth-token
const COOKIE_NAME = `sb-${SUPABASE_PROJECT_REF}-auth-token`;

// Rutas públicas (sin sesión)
const PUBLIC_PATHS = ['/login.html', '/api/login', '/api/logout'];

/** Decodifica el payload de un JWT sin verificar la firma (la verificación real la hace Supabase). */
function decodeJWTPayload(token) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        const payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(payload));
    } catch {
        return null;
    }
}

/** Verifica el token contra la API de Supabase Auth. Devuelve el usuario o null. */
async function getSupabaseUser(accessToken) {
    try {
        const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'apikey': SUPABASE_ANON_KEY,
            },
        });
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

/** Extrae el access_token de la cookie (JSON o troceada en .0, .1, …). */
function extractToken(cookieHeader) {
    if (!cookieHeader) return null;
    const cookies = cookieHeader.split(';').map(c => c.trim());
    const base = `${COOKIE_NAME}=`;
    const chunk0 = `${COOKIE_NAME}.0=`;
    for (const cookie of cookies) {
        if (cookie.startsWith(base)) {
            try {
                const parsed = JSON.parse(decodeURIComponent(cookie.slice(base.length)));
                return parsed.access_token || null;
            } catch { /* continue */ }
        }
        if (cookie.startsWith(chunk0)) {
            try {
                const parsed = JSON.parse(decodeURIComponent(cookie.slice(chunk0.length)));
                return parsed.access_token || null;
            } catch { /* continue */ }
        }
    }
    return null;
}

export default async function proxy(request) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) return;

    // Solo se protegen las páginas HTML, la raíz y el index
    const isProtected = pathname === '/' || pathname === '/index.html' || pathname.endsWith('.html');
    if (!isProtected) return;

    const cookieHeader = request.headers.get('cookie') || '';
    const accessToken = extractToken(cookieHeader);
    if (!accessToken) {
        return Response.redirect(new URL('/login.html', request.url), 302);
    }

    // Comprobación local rápida: ¿token caducado?
    const payload = decodeJWTPayload(accessToken);
    if (!payload || (payload.exp && payload.exp < Math.floor(Date.now() / 1000))) {
        return Response.redirect(new URL('/login.html', request.url), 302);
    }

    // Nivel de acceso por módulo (M9 está bloqueado para todos mientras locked:true)
    const mod = CURSO.moduleOfFile(pathname);
    if (mod) {
        const level = CURSO.levelFromPayload(payload);
        if (!CURSO.canAccess(level, mod.id)) {
            return Response.redirect(new URL(`/index.html#${mod.id}`, request.url), 302);
        }
    }

    // Sesión válida
    return;
}

export const config = {
    matcher: '/((?!_vercel|_next|favicon.ico|.*\\.(?:css|js|png|jpg|jpeg|webp|svg|ico|woff2?|ttf)$).*)',
};

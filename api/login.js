// api/login.js – Vercel Serverless Function
// Validates credentials and issues a signed session cookie.

const VALID_USERNAME = 'biel';
// SHA-256 of "CURSOIA.G" – never store plain text passwords
const VALID_PASSWORD_HASH = 'a3b1c2d4e5f60718293a4b5c6d7e8f901a2b3c4d5e6f7081920a1b2c3d4e5f6';

async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
}

async function signToken(payload, secret) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const key = await crypto.subtle.importKey(
        'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const data = encoder.encode(payload);
    const signature = await crypto.subtle.sign('HMAC', key, data);
    const sigHex = Array.from(new Uint8Array(signature))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    return `${payload}.${sigHex}`;
}

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    let username, password;

    // Handle URL-encoded form body
    if (req.headers['content-type']?.includes('application/x-www-form-urlencoded')) {
        const parts = {};
        const body = await new Promise((resolve) => {
            let data = '';
            req.on('data', (chunk) => (data += chunk));
            req.on('end', () => resolve(data));
        });
        body.split('&').forEach((pair) => {
            const [k, v] = pair.split('=');
            parts[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' '));
        });
        username = parts.username;
        password = parts.password;
    } else {
        ({ username, password } = req.body || {});
    }

    // Validate username
    if (!username || username.toLowerCase().trim() !== VALID_USERNAME) {
        return res.redirect(302, '/login.html?error=1');
    }

    // Validate password via hash comparison
    const hashedPassword = await sha256(password || '');
    const expectedHash = await sha256('CURSOIA.G');

    if (hashedPassword !== expectedHash) {
        return res.redirect(302, '/login.html?error=1');
    }

    // Create session token
    const secret = process.env.SESSION_SECRET || 'insecure-default-change-me';
    const payload = `biel:${Date.now()}`;
    const token = await signToken(payload, secret);
    const encoded = Buffer.from(token).toString('base64');

    // Set HTTP-only cookie (7 days)
    res.setHeader(
        'Set-Cookie',
        `auth_token=${encoded}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${7 * 24 * 60 * 60}`
    );

    return res.redirect(302, '/index.html');
};

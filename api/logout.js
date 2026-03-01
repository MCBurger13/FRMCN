// api/logout.js – Vercel Serverless Function
// Clears the session cookie and redirects to login.

module.exports = function handler(req, res) {
    res.setHeader(
        'Set-Cookie',
        'auth_token=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0'
    );
    return res.redirect(302, '/login.html');
};

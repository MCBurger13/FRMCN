import { NextResponse } from 'next/server';

export async function GET(request) {
    const response = NextResponse.redirect(new URL('/login.html', request.url), 303);
    response.cookies.delete('auth_token');
    return response;
}

export async function POST(request) {
    const response = NextResponse.redirect(new URL('/login.html', request.url), 303);
    response.cookies.delete('auth_token');
    return response;
}

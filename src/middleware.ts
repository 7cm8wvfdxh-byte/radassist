import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication
const PROTECTED_ROUTES = ['/community'];

// Routes only for guests (redirect to home if logged in)
const GUEST_ONLY_ROUTES = ['/login', '/register'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for Supabase auth token in cookies
    const hasAuthToken = request.cookies.getAll().some(
        cookie => cookie.name.startsWith('sb-') && cookie.name.endsWith('-auth-token')
    );

    // Protected routes: redirect to login if not authenticated
    if (PROTECTED_ROUTES.some(route => pathname.startsWith(route))) {
        if (!hasAuthToken) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Guest-only routes: redirect to home if already authenticated
    if (GUEST_ONLY_ROUTES.some(route => pathname.startsWith(route))) {
        if (hasAuthToken) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/community/:path*', '/login', '/register'],
};

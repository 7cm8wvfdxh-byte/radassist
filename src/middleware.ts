import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes only for guests (redirect to home if logged in)
const GUEST_ONLY_ROUTES = ['/login', '/register'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for Supabase auth token in cookies
    const hasAuthToken = request.cookies.getAll().some(
        cookie => cookie.name.startsWith('sb-') && cookie.name.endsWith('-auth-token')
    );

    // Guest-only routes: redirect to home if already authenticated
    if (GUEST_ONLY_ROUTES.some(route => pathname.startsWith(route))) {
        if (hasAuthToken) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/register'],
};

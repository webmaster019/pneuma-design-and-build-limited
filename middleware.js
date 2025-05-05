import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

const PUBLIC_POST_ROUTES = ['/api/auth/login', '/api/auth/register'];
const PUBLIC_ALL_ROUTES = ['/api/swagger'];

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const method = request.method;

    if (method === 'POST' && PUBLIC_POST_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    if (PUBLIC_ALL_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    if (pathname.startsWith('/api') && method === 'POST'  &&
        !request.headers.get('content-type')?.includes('multipart/form-data')) {
        const authHeader = request.headers.get('authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];

        try {
            const user = verifyToken(token);

            const requestHeaders = new Headers(request.headers);
            requestHeaders.set('x-user-id', user.id);
            requestHeaders.set('x-user-email', user.email);

            return NextResponse.next({
                request: {
                    headers: requestHeaders,
                },
            });
        } catch (err) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*'],
};

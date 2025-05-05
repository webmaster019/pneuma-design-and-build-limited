import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

const PUBLIC_POST_ROUTES = ['/api/auth/login', '/api/auth/register'];

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const method = request.method;

    // Vérifier si on est sur une route API en POST
    if (pathname.startsWith('/api') && method === 'POST') {
        // Autoriser les routes publiques (login/register)
        if (PUBLIC_POST_ROUTES.includes(pathname)) {
            return NextResponse.next();
        }

        const authHeader = request.headers.get('authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];

        try {
            const user = verifyToken(token);

            // Ajouter des infos à la requête si besoin
            const requestHeaders = new Headers(request.headers);
            requestHeaders.set('x-user-id', user.id);
            requestHeaders.set('x-user-email', user.email);

            return NextResponse.next({ request: { headers: requestHeaders } });
        } catch (err) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }
    }

    // GET, PUT, etc. → non protégés
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*'],
};

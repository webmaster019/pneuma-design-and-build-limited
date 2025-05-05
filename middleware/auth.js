import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export async function authMiddleware(req) {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
        const user = verifyToken(token);

        // Next.js doesn't allow modifying req directly, so return info via request headers or pass user to handler another way
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('x-user-id', user.id);
        requestHeaders.set('x-user-email', user.email);

        return NextResponse.next({ request: { headers: requestHeaders } });
    } catch (err) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
}

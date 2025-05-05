import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get the authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Authenticated user info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: Unauthorized
 */

export async function GET(req) {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
        const user = verifyToken(token);
        return NextResponse.json({ id: user.id, email: user.email });
    } catch (err) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
}

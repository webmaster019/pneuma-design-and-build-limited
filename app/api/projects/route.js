// Route segment config (App Router) — replaces deprecated `export const config = { api: { bodyParser: false } }`
export const runtime = 'nodejs';            // required for Cloudinary Node SDK & Buffer
export const dynamic = 'force-dynamic';     // disable caching for POST
export const preferredRegion = 'auto';      // optional
export const maxDuration = 60;              // optional: longer timeout for uploads

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import cloudinary from '@/lib/cloudinary';
import Project from '@/models/project';
import { verifyToken } from '@/lib/jwt';

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - mainImage
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               mainImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Project created successfully
 *       401:
 *         description: Unauthorized
 */

export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find().sort({ createdAt: -1 });
        return NextResponse.json(projects);
    } catch (err) {
        console.error('GET /api/projects failed:', err);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        // --- Auth ---
        const authHeader = req.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        let user;
        try {
            user = verifyToken(token); // make this await verifyToken(token) if your impl is async
        } catch {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }

        // --- Parse form data ---
        const formData = await req.formData();
        const title = (formData.get('title') ?? '').toString().trim();
        const description = (formData.get('description') ?? '').toString().trim();
        const file = formData.get('mainImage');

        if (!title || !description || !file) {
            return NextResponse.json(
                { error: 'Missing title, description, or mainImage' },
                { status: 400 }
            );
        }

        if (typeof file === 'string' || !file.arrayBuffer) {
            return NextResponse.json({ error: 'Invalid mainImage file' }, { status: 400 });
        }

        // --- Upload image to Cloudinary ---
        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadRes = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({ folder: 'projects' }, (err, res) => {
                    if (err) return reject(err);
                    resolve(res);
                })
                .end(buffer);
        });

        // --- Persist project ---
        await connectDB();
        const project = await Project.create({
            title,
            description,
            mainImage: uploadRes.secure_url,
            otherImages: [],
            createdBy: user.id, // optional linkage to user
        });

        return NextResponse.json(project, { status: 201 });
    } catch (err) {
        console.error('POST /api/projects failed:', err);
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}

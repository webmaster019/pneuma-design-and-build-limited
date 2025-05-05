import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import cloudinary from '@/lib/cloudinary';
import Project from '@/models/project';

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
 */
export async function GET() {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
}


export async function POST(req) {
    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const file = formData.get('mainImage');

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: 'projects' }, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        }).end(buffer);
    });

    await connectDB();
    const project = await Project.create({
        title,
        description,
        mainImage: result.secure_url,
        otherImages: [],
    });

    return NextResponse.json(project, { status: 201 });
}

export const config = {
    api: { bodyParser: false },
};

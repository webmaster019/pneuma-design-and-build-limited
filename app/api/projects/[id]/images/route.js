import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import cloudinary from '@/lib/cloudinary';
import Project from '@/models/project';

/**
 * @swagger
 * /api/projects/{id}/images:
 *   post:
 *     summary: Add images to a project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Images added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       401:
 *         description: Unauthorized (missing or invalid token)
 */
export async function POST(req, { params }) {
    const formData = await req.formData();
    const files = formData.getAll('images');

    const uploads = await Promise.all(files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ folder: 'projects' }, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            }).end(buffer);
        });
        return result.secure_url;
    }));

    await connectDB();
    const project = await Project.findByIdAndUpdate(params.id, {
        $push: { otherImages: { $each: uploads } },
    }, { new: true });

    return NextResponse.json(project);
}

export const config = {
    api: { bodyParser: false },
};

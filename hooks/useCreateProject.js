'use client';
import { useState } from 'react';

export default function useCreateProject() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createProject = async ({ title, description, mainImage }) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('mainImage', mainImage);

            const res = await fetch('/api/projects', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('Failed to create project');
            return await res.json();
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { createProject, loading, error };
}

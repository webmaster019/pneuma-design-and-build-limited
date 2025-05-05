'use client';
import { useState } from 'react';

export default function useAddProjectImages() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addImages = async (id, images) => {
        try {
            setLoading(true);
            const formData = new FormData();
            images.forEach((file) => formData.append('images', file));

            const res = await fetch(`/api/projects/${id}/images`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('Image upload failed');
            return await res.json();
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { addImages, loading, error };
}

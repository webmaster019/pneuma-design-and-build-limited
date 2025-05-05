'use client';
import { useState, useEffect } from 'react';

export default function useFetchProjectById(id) {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`/api/projects/${id}`)
            .then((res) => res.json())
            .then(setProject)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [id]);

    return { project, loading, error };
}

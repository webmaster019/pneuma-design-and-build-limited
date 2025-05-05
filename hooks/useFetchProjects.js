'use client';
import { useState, useEffect } from 'react';

export default function useFetchProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then(setProjects)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { projects, loading, error };
}

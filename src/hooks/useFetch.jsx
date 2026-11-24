import { useState, useEffect } from 'react';

/**
 * Hook personnalisé : charge une URL JSON et gère chargement + erreur.
 * @param {string} url - URL de l'API
 * @returns {{ data: any, isLoading: boolean, error: string|null }}
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController : annule la requête si le composant est démonté
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
        setData(await response.json());
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;

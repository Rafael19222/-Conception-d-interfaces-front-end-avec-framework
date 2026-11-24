import { useState } from 'react';
import { filterItems } from '../utils/helpers.js';

/**
 * Hook personnalisé : gère la recherche texte et les filtres d'une liste.
 * La logique de filtrage reste dans utils/helpers.js, ce hook ne gère que l'état.
 * @param {Array} items - liste complète à filtrer
 * @param {string[]} searchFields - champs où chercher le texte
 * @returns {{ query: string, setQuery: Function, filters: Object, setFilter: Function, visibleItems: Array }}
 */
function useSearch(items, searchFields) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});

  // Met à jour un seul filtre sans toucher aux autres
  const setFilter = (name, value) => {
    setFilters((previous) => ({ ...previous, [name]: value }));
  };

  const visibleItems = filterItems(items, query, filters, searchFields);

  return { query, setQuery, filters, setFilter, visibleItems };
}

export default useSearch;

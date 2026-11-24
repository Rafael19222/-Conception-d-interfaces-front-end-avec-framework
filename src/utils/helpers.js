// Fonctions utilitaires pures (aucune dépendance React)

/** Vérifie si une valeur est un objet non nul. */
const isObject = (value) => value !== null && typeof value === 'object';

/** Transforme n'importe quelle valeur en tableau. */
export const toArray = (value) => {
  if (Array.isArray(value)) return value;
  return value == null ? [] : [value];
};

/** Clé d'une référence : fonctionne pour "React", 3 ou { id: 3, name: "React" }. */
export const refKey = (value) =>
  isObject(value)
    ? String(value.id ?? value.name ?? value.label ?? value.title)
    : String(value);

/** Libellé affichable d'une référence. */
export const refLabel = (value) =>
  isObject(value)
    ? String(value.name ?? value.label ?? value.title ?? value.id)
    : String(value);

/** Convertit une liste de l'API en options { value, label } pour un <select>. */
export const toOptions = (list) =>
  toArray(list).map((entry) => ({ value: refKey(entry), label: refLabel(entry) }));

/** Titre d'un projet ou d'une formation. */
export const getTitle = (item) => item.title ?? item.name ?? 'Sans titre';

/**
 * Filtre une liste selon une recherche texte et des filtres sélectionnés.
 * @param {Array} items - éléments à filtrer
 * @param {string} query - texte recherché
 * @param {Object} filters - ex: { category: 'Mobile', technologies: 'React' }
 * @param {string[]} searchFields - champs où chercher le texte
 */
export const filterItems = (items, query, filters, searchFields) => {
  const search = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesSearch =
      !search ||
      searchFields.some((field) =>
        String(item[field] ?? '').toLowerCase().includes(search)
      );

    const matchesFilters = Object.entries(filters).every(([field, selected]) => {
      if (!selected) return true;
      return toArray(item[field]).map(refKey).includes(selected);
    });

    return matchesSearch && matchesFilters;
  });
};

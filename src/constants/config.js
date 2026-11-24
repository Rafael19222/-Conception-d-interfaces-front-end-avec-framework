// URLs des deux API REST
export const API_URLS = {
  projects: 'https://webcraft-api.vercel.app/data/projects.json',
  courses: 'https://webcraft-api.vercel.app/data/courses.json',
};

// Liens de navigation du Header
export const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/formations', label: 'Formations' },
  { to: '/inscription', label: 'Inscription' },
];

// Champs utilisés par la barre de recherche
export const SEARCH_FIELDS = ['title', 'name', 'description', 'technologies'];

// Filtres : field = champ de l'item, lookup = clé de la liste dans l'API
export const PROJECT_FILTERS = [
  { field: 'category', lookup: 'categories', label: 'Catégorie' },
  { field: 'technologies', lookup: 'technologies', label: 'Technologie' },
];

export const COURSE_FILTERS = [
  { field: 'category', lookup: 'categories', label: 'Catégorie' },
  { field: 'level', lookup: 'levels', label: 'Niveau' },
  { field: 'technologies', lookup: 'technologies', label: 'Technologie' },
];

// Champs affichés dans la Modal de détails
export const DETAIL_FIELDS = [
  { field: 'category', label: 'Catégorie' },
  { field: 'level', label: 'Niveau' },
  { field: 'technologies', label: 'Technologies' },
  { field: 'client', label: 'Client' },
  { field: 'year', label: 'Année' },
  { field: 'duration', label: 'Durée' },
  { field: 'instructor', label: 'Formateur' },
  { field: 'price', label: 'Prix (€)' },
];

// Champs texte du formulaire d'inscription
export const TEXT_FIELDS = [
  { name: 'firstName', label: 'Prénom', type: 'text' },
  { name: 'lastName', label: 'Nom', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Téléphone', type: 'tel' },
];

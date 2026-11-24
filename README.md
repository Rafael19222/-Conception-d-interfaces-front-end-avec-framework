# Portail WebCraft Solutions (React)

Migration du portail E1 vers React 18 + React Router 6.

## Lancer le projet

```bash
npm install
npm run dev
```

## Architecture

```
src/
├── main.jsx                # Point d'entrée
├── App.jsx                 # Composant racine + routes (React Router)
├── App.css                 # Styles globaux (CSS3)
├── pages/
│   ├── Home.jsx            # Hero + section Projets + section Formations
│   ├── ProjectsPage.jsx    # Liste des projets (/projets)
│   ├── CoursesPage.jsx     # Liste des formations (/formations)
│   └── InscriptionPage.jsx # Formulaire d'inscription (/inscription)
├── components/
│   ├── Header / Footer / Hero
│   ├── SearchBar / FilterBar / Modal / Loader
│   ├── ProjectCard / CourseCard
│   ├── CatalogSection      # Section générique (recherche + filtres + cartes + modal)
│   ├── ProjectsSection / CoursesSection  # CatalogSection liée à chaque API
│   └── InscriptionForm
├── hooks/
│   ├── useFetch.jsx        # Chargement des API (chargement + erreur)
│   └── useSearch.jsx       # Recherche texte + filtres
├── utils/
│   ├── validation.js       # Validation du formulaire
│   ├── helpers.js          # Fonctions de filtrage et de libellés
│   └── propTypes.js        # Types de props partagés
└── constants/config.js     # URLs d'API, filtres, navigation, champs du formulaire
```

## Choix techniques

- **CatalogSection** : composant générique utilisé pour les Projets ET les Formations (aucun code dupliqué).
- **useFetch** : charge les 2 API avec gestion du chargement et des erreurs.
- **useSearch** : isole l'état de la recherche et des filtres hors des composants UI.
- **SearchBar / FilterBar / Modal** : réutilisés dans les deux sections.
- **validation.js** : validation du formulaire séparée de l'interface.
- **config.js** : URLs, filtres et champs centralisés dans un fichier dédié.
- **PropTypes** : les props de chaque composant sont typées avec `prop-types`.
- Nommage : camelCase (variables/fonctions), PascalCase (composants), indentation 2 espaces.

## Routes

| Route          | Page                |
| -------------- | ------------------- |
| `/`            | Accueil             |
| `/projets`     | Liste des projets   |
| `/formations`  | Liste des formations|
| `/inscription` | Inscription         |

## API

- Projets : https://webcraft-api.vercel.app/data/projects.json
- Formations : https://webcraft-api.vercel.app/data/courses.json

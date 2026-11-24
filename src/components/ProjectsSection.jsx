import CatalogSection from './CatalogSection.jsx';
import ProjectCard from './ProjectCard.jsx';
import { API_URLS, PROJECT_FILTERS } from '../constants/config.js';

/** Section des projets (API 1) : recherche, filtres, cartes et modal. */
function ProjectsSection() {
  return (
    <CatalogSection
      title="Nos projets"
      url={API_URLS.projects}
      dataKey="projects"
      filtersConfig={PROJECT_FILTERS}
      Card={ProjectCard}
    />
  );
}

export default ProjectsSection;

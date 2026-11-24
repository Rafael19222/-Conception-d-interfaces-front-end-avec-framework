import CatalogSection from './CatalogSection.jsx';
import CourseCard from './CourseCard.jsx';
import { API_URLS, COURSE_FILTERS } from '../constants/config.js';

/** Section des formations (API 2) : recherche, filtres, cartes et modal. */
function CoursesSection() {
  return (
    <CatalogSection
      title="Nos formations"
      url={API_URLS.courses}
      dataKey="courses"
      filtersConfig={COURSE_FILTERS}
      Card={CourseCard}
    />
  );
}

export default CoursesSection;

import PropTypes from 'prop-types';

/** Forme commune d'un projet ou d'une formation renvoyé par l'API. */
export const itemShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  level: PropTypes.string,
  duration: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
});

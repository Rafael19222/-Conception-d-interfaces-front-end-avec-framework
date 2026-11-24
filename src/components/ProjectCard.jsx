import PropTypes from 'prop-types';
import { getTitle, toArray } from '../utils/helpers.js';
import { itemShape } from '../utils/propTypes.js';

function ProjectCard({ item, getLabel, onSelect }) {
  const technologies = toArray(item.technologies).map((tech) =>
    getLabel('technologies', tech)
  );

  return (
    <article className="card">
      {item.image && (
        <img className="card__image" src={item.image} alt={getTitle(item)} loading="lazy" />
      )}
      <div className="card__body">
        {item.category != null && (
          <span className="badge">{getLabel('category', item.category)}</span>
        )}
        <h3>{getTitle(item)}</h3>
        <p className="card__text">{item.description}</p>
        <div className="tags">
          {technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
        <button type="button" className="btn" onClick={() => onSelect(item)}>
          Voir les détails
        </button>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  item: itemShape.isRequired,
  getLabel: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ProjectCard;

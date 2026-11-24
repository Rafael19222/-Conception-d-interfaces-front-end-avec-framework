import PropTypes from 'prop-types';
import { getTitle } from '../utils/helpers.js';
import { itemShape } from '../utils/propTypes.js';

function CourseCard({ item, getLabel, onSelect }) {
  return (
    <article className="card">
      {item.image && (
        <img className="card__image" src={item.image} alt={getTitle(item)} loading="lazy" />
      )}
      <div className="card__body">
        <div className="tags">
          {item.category != null && (
            <span className="badge">{getLabel('category', item.category)}</span>
          )}
          {item.level != null && (
            <span className="badge badge--level">{getLabel('level', item.level)}</span>
          )}
        </div>
        <h3>{getTitle(item)}</h3>
        <p className="card__text">{item.description}</p>
        {item.duration && <p className="muted">Durée : {item.duration}</p>}
        <button type="button" className="btn" onClick={() => onSelect(item)}>
          Voir les détails
        </button>
      </div>
    </article>
  );
}

CourseCard.propTypes = {
  item: itemShape.isRequired,
  getLabel: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CourseCard;

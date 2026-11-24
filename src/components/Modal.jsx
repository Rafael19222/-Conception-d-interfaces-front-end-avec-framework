import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { DETAIL_FIELDS } from '../constants/config.js';
import { getTitle, toArray } from '../utils/helpers.js';
import { itemShape } from '../utils/propTypes.js';

/**
 * Modal réutilisable d'affichage des détails d'un projet ou d'une formation.
 * Se ferme avec la touche Échap, la croix ou un clic sur le fond.
 */
function Modal({ item = null, getLabel, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
        {item.image && <img className="modal__image" src={item.image} alt={getTitle(item)} />}
        <h2>{getTitle(item)}</h2>
        <p>{item.description}</p>
        {DETAIL_FIELDS.map(({ field, label }) => {
          const values = toArray(item[field]);
          if (values.length === 0) return null;
          return (
            <p key={field}>
              <strong>{label} :</strong>{' '}
              {values.map((value) => getLabel(field, value)).join(', ')}
            </p>
          );
        })}
      </div>
    </div>
  );
}

Modal.propTypes = {
  item: itemShape,
  getLabel: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

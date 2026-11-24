import PropTypes from 'prop-types';

/**
 * Filtres dynamiques réutilisables.
 * @param {Array} filters - [{ name, label, options: [{ value, label }] }]
 * @param {Object} values - valeurs sélectionnées { name: value }
 * @param {Function} onChange - (name, value) => void
 */
function FilterBar({ filters, values, onChange }) {
  return (
    <div className="filter-bar">
      {filters.map(({ name, label, options }) => (
        <select
          key={name}
          className="input"
          aria-label={label}
          value={values[name] ?? ''}
          onChange={(event) => onChange(name, event.target.value)}
        >
          <option value="">{label} : tous</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterBar;

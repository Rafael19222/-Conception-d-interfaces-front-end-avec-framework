import PropTypes from 'prop-types';

function SearchBar({ value, onChange, placeholder = 'Rechercher...' }) {
  return (
    <input
      type="search"
      className="input search-bar"
      value={value}
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;

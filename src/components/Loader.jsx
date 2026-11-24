import PropTypes from 'prop-types';

function Loader({ message = 'Chargement...' }) {
  return (
    <div className="loader" role="status">
      <div className="loader__spinner" />
      <p>{message}</p>
    </div>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;

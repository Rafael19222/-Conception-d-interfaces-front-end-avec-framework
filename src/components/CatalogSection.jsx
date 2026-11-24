import PropTypes from 'prop-types';
import { useState } from 'react';
import useFetch from '../hooks/useFetch.jsx';
import useSearch from '../hooks/useSearch.jsx';
import SearchBar from './SearchBar.jsx';
import FilterBar from './FilterBar.jsx';
import Modal from './Modal.jsx';
import Loader from './Loader.jsx';
import { SEARCH_FIELDS } from '../constants/config.js';
import { refKey, refLabel, toOptions } from '../utils/helpers.js';

/**
 * Section générique : charge une API, affiche recherche + filtres + cartes + modal.
 * Utilisée pour les projets ET les formations (aucun code dupliqué).
 */
function CatalogSection({ title, url, dataKey, filtersConfig, Card }) {
  const { data, isLoading, error } = useFetch(url);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = data?.[dataKey] ?? [];
  const { query, setQuery, filters, setFilter, visibleItems } = useSearch(items, SEARCH_FIELDS);

  // Options des filtres construites à partir des listes de l'API
  const filterOptions = filtersConfig.map(({ field, lookup, label }) => ({
    name: field,
    label,
    options: toOptions(data?.[lookup]),
  }));

  // Retrouve le libellé d'une valeur (ex: id 3 -> "React")
  const getLabel = (field, value) => {
    if (value == null) return '';
    const options = filterOptions.find((filter) => filter.name === field)?.options ?? [];
    return options.find((option) => option.value === refKey(value))?.label ?? refLabel(value);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>

        {isLoading && <Loader />}
        {error && (
          <p className="error" role="alert">
            Impossible de charger les données : {error}
          </p>
        )}

        {!isLoading && !error && (
          <>
            <div className="toolbar">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder={`Rechercher dans ${title.toLowerCase()}...`}
              />
              <FilterBar filters={filterOptions} values={filters} onChange={setFilter} />
            </div>

            {visibleItems.length === 0 ? (
              <p className="muted">Aucun résultat.</p>
            ) : (
              <div className="grid">
                {visibleItems.map((item, index) => (
                  <Card
                    key={item.id ?? index}
                    item={item}
                    getLabel={getLabel}
                    onSelect={setSelectedItem}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <Modal item={selectedItem} getLabel={getLabel} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
}

CatalogSection.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  filtersConfig: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      lookup: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  Card: PropTypes.elementType.isRequired,
};

export default CatalogSection;

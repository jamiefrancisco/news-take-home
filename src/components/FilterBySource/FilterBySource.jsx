import React, { useEffect } from 'react';
import { useSources } from '../../hooks/useSources.js';

function FilterBySource({ onFilterChange }) {
 const { sources, selectedSources, handleSourceSelection } = useSources();

 const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    handleSourceSelection(name, checked);
 };

 useEffect(() => {
    onFilterChange(selectedSources);
 }, [selectedSources, onFilterChange]);

 return (
    <div className="filter-by-source">
      {sources.map((source) => (
        <label key={source}>
          <input
            type="checkbox"
            name={source}
            checked={selectedSources.includes(source)}
            onChange={handleCheckboxChange}
          />
          {source}
        </label>
      ))}
    </div>
 );
}

export default FilterBySource;

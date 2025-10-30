import React from 'react';
import './FilterSortControls.css';

const FilterSortControls = ({ searchTerm, onSearchChange, sortBy, onSortChange }) => {
  return (
    <div className="filter-sort-controls">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-select"
      >
        <option value="">Sort by...</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="difficulty-asc">Difficulty (Easy to Hard)</option>
        <option value="difficulty-desc">Difficulty (Hard to Easy)</option>
      </select>
    </div>
  );
};

export default FilterSortControls;
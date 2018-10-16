import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  const searchText = 'type to search';

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder={searchText}
    />
  );
};

export default SearchPanel;

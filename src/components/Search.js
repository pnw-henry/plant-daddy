import React from "react";

function Search({ term, onSearch }) {
  return (
    <div className="search-bar">
      <h3>Find plant:</h3>
      <input
        value={term}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        placeholder="Enter name..."
      />
    </div>
  );
}

export default Search;

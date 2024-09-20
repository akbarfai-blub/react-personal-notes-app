import React from "react";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Cari catatan..."
    />
  );
}

export default SearchBar;

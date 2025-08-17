import React from 'react';

function SearchBar({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    />
  );
}

export default SearchBar;

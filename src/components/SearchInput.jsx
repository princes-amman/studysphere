import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search questions"
      />
    </div>
  );
}

export default SearchInput;

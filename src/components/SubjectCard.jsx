import React from 'react';

function SubjectCard({ name, description }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        width: '200px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SubjectCard;

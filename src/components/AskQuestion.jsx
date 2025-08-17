
// AskQuestion.jsx
import React from 'react';

function AskQuestion({ value, onChange, onPost }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Write your question here..."
        rows={5}
        cols={50}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px'
        }}
      />
      <br />
      <button onClick={onPost}>Post Question</button>
    </div>
  );
}

export default AskQuestion;

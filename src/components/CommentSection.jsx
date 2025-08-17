import React, { useState } from 'react';

function CommentSection({ question, onAdd }) {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState({}); // Store likes for each comment

  // Add new comment
  function handleComment() {
    if (comment.trim() === '') return;
    onAdd(comment);
    setComment('');
  }

  // Like a comment by index
  function likeComment(index) {
    setLikes({
      ...likes,
      [index]: (likes[index] || 0) + 1,
    });
  }

  return (
    <div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment"
      />
      <button onClick={handleComment}>Comment</button>

      <ul>
        {question.comments.map((c, i) => (
          <li key={i}>
            {c}
            <button onClick={() => likeComment(i)} style={{ marginLeft: '10px' }}>
              👍 {likes[i] || 0}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;

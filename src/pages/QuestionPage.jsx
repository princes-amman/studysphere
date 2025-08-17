import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuestionPage.css"
function QuestionPage({ questions, setQuestions }) {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState({});
  const navigate = useNavigate();

  // Add a new question
  const postQuestion = () => {
    if (!newQuestion.trim()) return;
    setQuestions([
      ...questions,
      { id: Date.now(), text: newQuestion, answers: [], likes: 0 }
    ]);
    setNewQuestion("");
  };

  // Add an answer
  const postAnswer = (id) => {
    if (!newAnswer[id]?.trim()) return;
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? { ...q, answers: [...q.answers, newAnswer[id]] }
          : q
      )
    );
    setNewAnswer({ ...newAnswer, [id]: "" });
  };

  // Like a question
  const likeQuestion = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <textarea
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Type your question..."
        rows="3"
        style={{ width: "100%" }}
      />
      <button onClick={postQuestion} >
        Post Question
      </button>

      <button
        
        onClick={() => navigate("/subject")}
      >
        📚 Go to Subject
      </button>

      <h2>All Questions</h2>
      {questions.map((q) => (
        <div key={q.id} >
          <p>❓ {q.text}</p>
          <p>
            👍 {q.likes}{" "}
            <button onClick={() => likeQuestion(q.id)}>Like</button>
          </p>
          {q.answers.map((ans, i) => (
            <p key={i}>💬 {ans}</p>
          ))}

          <input
            type="text"
            placeholder="Write an answer..."
            value={newAnswer[q.id] || ""}
            onChange={(e) =>
              setNewAnswer({ ...newAnswer, [q.id]: e.target.value })
            }
          />
          <button onClick={() => postAnswer(q.id)}>Post Answer</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;

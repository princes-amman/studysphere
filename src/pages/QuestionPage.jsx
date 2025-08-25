import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/QuestionPage.css";

function QuestionPage({ questions, setQuestions }) {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState({});
  const navigate = useNavigate();

  // ✅ Add a new question to backend
  const postQuestion = async () => {
    if (!newQuestion.trim()) return;

    const res = await axios.post("http://localhost:5000/questions", {
      text: newQuestion,
    });

    setQuestions([...questions, res.data]); // update state with backend response
    setNewQuestion("");
    navigate("/"); // redirect to home after posting
  };

  // ✅ Add an answer to backend
  const postAnswer = async (id) => {
    if (!newAnswer[id]?.trim()) return;

    const res = await axios.post(
      `http://localhost:5000/questions/${id}/answers`,
      { text: newAnswer[id] }
    );

    setQuestions(
      questions.map((q) => (q.id === id ? res.data : q)) // replace updated question
    );
    setNewAnswer({ ...newAnswer, [id]: "" });
  };

  // ✅ Like a question
  const likeQuestion = async (id) => {
    const res = await axios.post(
      `http://localhost:5000/questions/${id}/like`
    );

    setQuestions(
      questions.map((q) => (q.id === id ? res.data : q))
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
      <button onClick={postQuestion}>Post Question</button>

      <button onClick={() => navigate("/subject")}>📚 Go to Subject</button>

      <h2>All Questions</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p>❓ {q.text}</p>
          <p>
            👍 {q.likes}{" "}
            <button onClick={() => likeQuestion(q.id)}>Like</button>
          </p>
          {q.answers.map((ans, i) => (
            <p key={i}>💬 {ans.text}</p> // ✅ updated to ans.text (since backend stores {text, likes})
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

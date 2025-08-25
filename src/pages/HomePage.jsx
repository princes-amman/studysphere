import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [newAnswer, setNewAnswer] = useState({}); // answers per question

  // 🔄 Fetch questions from backend
  const fetchQuestions = () => {
    axios.get("http://localhost:5000/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error("Error fetching questions:", err));
  };

  useEffect(() => {
    fetchQuestions(); // load on first render
  }, []);

  // ✅ Like a question
  const handleLike = (id) => {
    axios.post(`http://localhost:5000/questions/${id}/like`)
      .then(() => fetchQuestions()); // reload all questions
  };

  // ✅ Post an answer
  const handlePostAnswer = (qId, text) => {
    axios.post(`http://localhost:5000/questions/${qId}/answers`, { text })
      .then(() => {
        fetchQuestions(); // reload all questions
        setNewAnswer({ ...newAnswer, [qId]: "" }); // clear input
      });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          🎓 Welcome to <span>StudySphere</span>
        </h1>
        <p className="hero-subtitle">
          Empowering students with accessible, high-quality educational
          resources. <br />
          Learn, share, and grow together with <b>StudySphere</b>.
        </p>
        <button className="ask-btn" onClick={() => navigate("/question")}>
          ✨ Ask a Question
        </button>
      </section>

      {/* Recent Questions */}
      <section className="questions-section">
        <h2 className="section-title">📌 Recent Questions</h2>
        {questions.length === 0 ? (
          <p className="no-questions">No questions posted yet. Be the first to ask!</p>
        ) : (
          questions.map((q) => (
            <div key={q.id} className="question-card">
              <p className="question-text">❓ {q.text}</p>

              {/* Like button */}
              <button className="like-btn" onClick={() => handleLike(q.id)}>
                👍 Like ({q.likes})
              </button>

              {/* Answers */}
              <div className="answers">
                {q.answers.map((ans, i) => (
                  <div key={i} className="answer-card">
                    <p className="answer">{ans.text}</p>
                    <span>👍 {ans.likes}</span>
                  </div>
                ))}
              </div>

              {/* Post Answer */}
              <div className="post-answer">
                <textarea
                  placeholder="Write your answer..."
                  value={newAnswer[q.id] || ""}
                  onChange={(e) =>
                    setNewAnswer({ ...newAnswer, [q.id]: e.target.value })
                  }
                />
                <button
                  className="post-btn"
                  onClick={() => {
                    if (newAnswer[q.id]?.trim()) {
                      handlePostAnswer(q.id, newAnswer[q.id]);
                    }
                  }}
                >
                  💡 Post Answer
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default HomePage;

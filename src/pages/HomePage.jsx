import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage({ questions, setQuestions }) {
  const navigate = useNavigate();
  const [newAnswer, setNewAnswer] = useState({}); // store new answers per question

  // ✅ Like a question
  const handleLike = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };

  // ✅ Like an answer
  const handleAnswerLike = (qId, ansIndex) => {
    setQuestions(
      questions.map((q) =>
        q.id === qId
          ? {
              ...q,
              answers: q.answers.map((ans, i) =>
                i === ansIndex ? { ...ans, likes: ans.likes + 1 } : ans
              ),
            }
          : q
      )
    );
  };

  // ✅ Post an answer
  const handlePostAnswer = (qId, text) => {
    setQuestions(
      questions.map((q) =>
        q.id === qId
          ? { ...q, answers: [...q.answers, { text, likes: 0 }] }
          : q
      )
    );
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
          <p className="no-questions">
            No questions posted yet. Be the first to ask!
          </p>
        ) : (
          questions.map((q) => (
            <div key={q.id} className="question-card">
              <p className="question-text">❓ {q.text}</p>

              {/* Like button for question */}
              <button className="like-btn" onClick={() => handleLike(q.id)}>
                👍 Like ({q.likes})
              </button>

              {/* Answers */}
              <div className="answers">
                {q.answers.map((ans, i) => (
                  <div key={i} className="answer-card">
                    <p className="answer"> {ans.text}</p>
                    <button
                      className="like-btn small-btn"
                      onClick={() => handleAnswerLike(q.id, i)}
                    >
                      👍 {ans.likes}
                    </button>
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
                      setNewAnswer({ ...newAnswer, [q.id]: "" });
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

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/global.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import SubjectNamePage from "./pages/SubjectNamePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is React?",
      answers: ["React is a JavaScript library for building UIs."],
      likes: 0
    },
    {
      id: 2,
      text: "What is useState?",
      answers: ["A React Hook for managing state in components."],
      likes: 0
    }
  ]);
  // Function to handle like button
  const handleLike = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route
  path="/"
  element={<HomePage questions={questions} onLike={handleLike} />}
/>
          <Route
            path="/question"
            element={
              <QuestionPage questions={questions} setQuestions={setQuestions} />
            }
          />
          <Route path="/subject" element={<SubjectNamePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

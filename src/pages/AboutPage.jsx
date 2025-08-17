import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About <span>StudySphere</span></h1>
        <p>Your hub for collaborative learning and knowledge sharing.</p>
      </div>

      <div className="about-content">
        <p>
          StudySphere is a modern platform designed to empower students and learners 
          by allowing them to <strong>ask questions</strong>, <strong>share knowledge</strong>, 
          and <strong>grow together</strong>.
        </p>
        <p>
          Whether you’re stuck on a difficult problem or want to contribute your expertise, 
          StudySphere makes learning more interactive and enjoyable.
        </p>

        <h2 className="features-heading">✨ Features</h2>
        <ul className="features-list">
          <li>✅ Post and answer academic questions</li>
          <li>✅ Well-organized by subject or topic</li>
          <li>✅ User-friendly and accessible to everyone</li>
          <li>✅ No login required to start learning</li>
        </ul>

        <p className="closing-text">
          We are constantly improving <span>StudySphere</span> to make it the best 
          learning companion for you.  
          <br />Thanks for being part of our growing community! 🚀
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

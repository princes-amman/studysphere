import React from 'react';
import '../styles/profile.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      
      {/* Profile Header */}
      <div className="profile-header">
        
        
        <h1 className="profile-name">Shezadi Amman</h1>
        <p className="profile-role">🎓 Psychology Teacher & 💻 Front-End Developer</p>
      </div>

      {/* About Section */}
      <div className="profile-section">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          Passionate educator with experience in special needs education and web development. 
          Skilled in <strong>HTML, CSS, JavaScript, React</strong>, and Quranic studies.  
          I enjoy blending psychology and technology to create meaningful learning experiences.
        </p>
      </div>

      {/* Skills Section */}
      <div className="profile-section">
        <h2 className="section-title">Skills</h2>
        <ul className="profile-list">
          <li>⚛️ React.js & Front-End Design</li>
          <li>📖 Qur’an Teaching & Tajweed</li>
          <li>🧠 Counseling & Psychology</li>
          <li>🎤 Communication & Public Speaking</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="profile-section contact-box">
        <h2 className="section-title">Contact</h2>
        <p>📧 Email: <a href="mailto:ammanahsen717@gmail.com">ammanahsen717@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+923175138466">0317-5138466</a></p>
      </div>
    </div>
  );
};

export default ProfilePage;

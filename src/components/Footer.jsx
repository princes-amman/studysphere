import React from "react";
import "../styles/Footer.css"; // Make sure file name matches

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h2>StudySphere</h2>
          <p>Your hub for collaborative learning and knowledge sharing.</p>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h3>Resources</h3>
          <nav>
            <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
              📘 W3Schools
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              ▶️ YouTube Channel
            </a>
            <a href="https://www.yahoobaba.net" target="_blank" rel="noopener noreferrer">
              🎓 Yahoo Baba
            </a>
            <a href="https://www.meracollege.net" target="_blank" rel="noopener noreferrer">
              🏫 Mera College
            </a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><span>📞 Phone:</span> +92 300 1234567</p>
          <p><span>📧 Email:</span> support@studysphere.com</p>
          <p><span>📍 Address:</span> Lahore, Pakistan</p>
        </div>
      </div>

      <hr />

      {/* Bottom Part */}
      <div className="footer-bottom">
        
        

        {/* Back to top button */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        <p>© {new Date().getFullYear()} StudySphere | Designed by <strong>Shezadi Amman</strong>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

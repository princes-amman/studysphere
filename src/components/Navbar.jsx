import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-link">
        <img src="/images/logo.png" alt="Studyspher Logo" className="logo" />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
      
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>🏠 Home</Link>
        <Link to="/question" onClick={() => setMobileMenuOpen(false)}>❓ Ask Question</Link>
        <Link to="/subject" onClick={() => setMobileMenuOpen(false)}>📚 Subjects</Link>
        <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>👤 Profile</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>📞 Contact</Link>
        <Link to="/signIn" onClick={() => setMobileMenuOpen(false)}>📖 signIn</Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>📖 About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

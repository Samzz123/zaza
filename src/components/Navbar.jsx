// Fixed src/components/Navbar.jsx with proper signup routing
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">
          <img src="/assets/logo.png" alt="Aspire Sync Logo" className="logo" />
          <span className="brand-text">Aspire Sync</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/college">College Finder</Link>
        <Link to="/quiz">Career Quiz</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="navbar-right">
        <Link to="/login" className="btn-login">Login</Link>
        <Link to="/signup" className="btn-signup">Sign up</Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <Link to="/" onClick={toggleMobileMenu}>🏠 Home</Link>
          <Link to="/college" onClick={toggleMobileMenu}>🎓 College Finder</Link>
          <Link to="/quiz" onClick={toggleMobileMenu}>❓ Career Quiz</Link>
          <Link to="/courses" onClick={toggleMobileMenu}>📚 Courses</Link>
          <Link to="/resources" onClick={toggleMobileMenu}>📖 Resources</Link>
          <Link to="/about" onClick={toggleMobileMenu}>ℹ️ About Us</Link>
          <Link to="/faq" onClick={toggleMobileMenu}>💬 FAQ</Link>
          
          <div className="mobile-auth-buttons">
            <Link to="/login" className="mobile-btn-login" onClick={toggleMobileMenu}>
              Login
            </Link>
            <Link to="/signup" className="mobile-btn-signup" onClick={toggleMobileMenu}>
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}
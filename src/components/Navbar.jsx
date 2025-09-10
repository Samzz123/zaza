// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // <-- Make sure to import Link

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">
          <img src="/assets/logo.png" alt="Aspire Sync Logo" className="logo" />
          <span className="brand-text">Aspire Sync</span>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/college">College Finder</Link>
        <Link to="/quiz">Career Quiz</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/resources">Resources</Link>
      </div>

      <div className="navbar-right">
        {/* --- Change these buttons to Links --- */}
        <Link to="/login" className="btn-login">Login</Link>
        <Link to="/login" className="btn-signup">Sign up</Link> 
      </div>
    </nav>
  );
}
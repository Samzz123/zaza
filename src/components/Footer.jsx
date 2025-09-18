import React from 'react';
import './Footer.css'; // Import the new CSS file

// A simple SVG logo component for "Aspire Sync"
const Logo = () => (
  <svg height="32" width="32" className="footer-logo-svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M91.33 117.33a37.33 37.33 0 1 1 0-53.21 37.33 37.33 0 0 1 0 53.21ZM64 128a64 64 0 1 1 64-64 64 64 0 0 1-64 64Z M36.67 10.67a37.33 37.33 0 1 0 0 53.21 37.33 37.33 0 0 0 0-53.21Z"/>
  </svg>
);


export default function Footer() {
  return (
    <footer className="site-footer">
      
      <div className="background-text-container">
        <h1 className="background-text">Aspire Sync</h1>
      </div>

      <div className="footer-content">
        <div className="footer-grid">

          {/* Column 1: Logo and Nav Links */}
          <div className="footer-column">
            <div className="footer-logo">
              <Logo />
              <span>Aspire Sync</span>
            </div>
            <nav className="footer-nav">
              <a href="/about">About Us</a>
              <a href="/courses">Courses</a>
              <a href="/faq">FAQ</a>
            </nav>
          </div>

          {/* Column 2: Newsletter */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Column 3: Social Media */}
          <div className="footer-column">
            <h3>Social Media</h3>
            <nav className="footer-nav">
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </nav>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column">
            <h3>Contact Info</h3>
            <div className="contact-details">
              <p>+91 12345 67890</p>
              <p>hello@aspiresync.com</p>
              <p>123 Education Lane, Baguiati, Kolkata, West Bengal-700028</p>
            </div>
          </div>
          
        </div>

        {/* --- Sub-Footer --- */}
        <div className="sub-footer">
          <p>© {new Date().getFullYear()} Aspire Sync. All rights reserved.</p>
          <div className="sub-footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
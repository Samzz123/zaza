import React from 'react';
import { Link } from 'react-router-dom';

// We receive onChatClick as a prop from App.jsx
export default function Navbar({ onChatClick }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* You can replace this with your actual logo if you have one */}
          <span className="text-2xl font-bold text-gray-800">Aspire Sync</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link to="/college" className="hover:text-orange-500 transition-colors">College Finder</Link>
          <Link to="/quiz" className="hover:text-orange-500 transition-colors">Career Quiz</Link>
          <Link to="/courses" className="hover:text-orange-500 transition-colors">Courses</Link>
          <Link to="/resources" className="hover:text-orange-500 transition-colors">Resources</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
          <Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center space-x-3">
          {/* --- Chatbot Icon Button --- */}
          <button
            onClick={onChatClick}
            className="p-0 bg-transparent border-none rounded-full hover:scale-110 transition-transform duration-300"
            aria-label="Toggle AI Chat"
          >
            <img src="/chatbot-icon.png" alt="AI Chatbot Icon" className="w-10 h-10 rounded-full cursor-pointer" />
          </button>

          <Link to="/login">
            <button className="px-5 py-2 text-orange-500 border border-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300">
              Sign up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

    </nav>
  );
}

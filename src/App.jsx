// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Keep your existing page imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CollegeFinder from './pages/CollegeFinder';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';

// --- Add the new page imports ---
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="content-container">
        <Routes>
          {/* Keep your existing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/college" element={<CollegeFinder />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<Resources />} />
          
          {/* --- Add the new routes --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function FeatureCard({ title, desc, cta, image, href }) {
  return (
    <Link to={href} className="feature-card">
      {/* Just the PNG image, no orange box */}
      <img src={image} alt={title} className="feature-img" />

      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="feature-btn">{cta}</button>
    </Link>
  );
}


// This is the main Home page component.
export default function Home() {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Confused about your career?
            <br />
            We guide you every step of the way.
          </h1>
          <p>
            Take a short quiz, explore recommended courses and find the right
            government colleges in your area.
          </p>
          <div className="hero-buttons">
            <Link to="/quiz" className="primary-btn">
              Take Career Quiz
            </Link>
            <Link to="/courses" className="secondary-btn">
              Explore Courses & Colleges
            </Link>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap">
        <div className="roadmap-step">
          <img src="/assets/student.png" alt="Student icon for quiz step" />
          <span>Take quiz</span>
        </div>
        <div className="roadmap-step2">
          <img src="/assets/tpp.png" alt="arrow" />
        </div>
        <div className="roadmap-step">
          <img src="/assets/roadmap.png" alt="Pathway icon for courses step" />
          <span>Get courses</span>
        </div>
        <div className="roadmap-step2">
          <img src="/assets/tpp.png" alt="arrow" />
        </div>
        <div className="roadmap-step">
          <img src="/assets/trophy.png" alt="Trophy icon for college step" />
          <span>Find college</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <FeatureCard
          image="/assets/hstudent.png"
          title="Career Quiz"
          desc="Find your best-fit career in 5 mins."
          cta="Career Quiz"
          href="/quiz"
        />
        <FeatureCard
          image="/assets/roadmap.png"
          title="Courses & Careers"
          desc="Explore pathways to success now."
          cta="Courses & Careers"
          href="/courses"
        />
        <FeatureCard
          image="/assets/trophy.png"
          title="College Finder"
          desc="Get the right college for your rank."
          cta="College Finder"
          href="/college"
        />
      </div>
    </section>
  );
}
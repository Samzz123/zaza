// src/pages/CollegeFinder.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CollegeFinder.css'; // Import the new CSS file

// Mock data for colleges. In a real app, this would come from an API.
const allColleges = [
  {
    id: 1,
    name: 'Govt. Degree College Srinagar',
    city: 'Srinagar',
    courses: ['B.Sc Physics', 'B.Com', 'BCA'],
  },
  {
    id: 2,
    name: 'Govt. Degree College Baramulla',
    city: 'Baramulla',
    courses: ['BA Political Science', 'B.Com'],
  },
  {
    id: 3,
    name: 'IIT Jammu',
    city: 'Jammu',
    courses: ['B.Tech', 'M.Tech'],
  },
  {
    id: 4,
    name: 'Govt. College for Women, Parade Ground',
    city: 'Jammu',
    courses: ['B.Sc Physics', 'B.Com', 'BCA'],
  },
];

export default function CollegeFinder() {
  const [colleges, setColleges] = useState(allColleges);
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('All');

  // This effect runs whenever the search term or city filter changes
  useEffect(() => {
    let filtered = allColleges;

    // Filter by search term (checks college name)
    if (searchTerm) {
      filtered = filtered.filter((college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by city
    if (cityFilter !== 'All') {
      filtered = filtered.filter((college) => college.city === cityFilter);
    }

    setColleges(filtered);
  }, [searchTerm, cityFilter]);

  const uniqueCities = ['All', ...new Set(allColleges.map(c => c.city))];

  return (
    <div className="college-finder-page">
      <header className="finder-header">
        <h1>Find Your Perfect College</h1>
        <p>Search and filter through colleges in Jammu & Kashmir.</p>
        <div className="filter-bar">
          <input
            type="search"
            placeholder="Search by college name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
            {uniqueCities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
      </header>

      <main className="results-section">
        {colleges.length > 0 ? (
          <div className="results-grid">
            {colleges.map((college) => (
              <div className="college-card" key={college.id}>
                <div className="card-image">{college.name.charAt(0)}</div>
                <div className="card-content">
                  <h3>{college.name}</h3>
                  <p className="location">{college.city}</p>
                  <div className="courses-list">
                    {college.courses.map((course) => (
                      <span className="course-tag" key={course}>{course}</span>
                    ))}
                  </div>
                  <div className="card-actions">
                    <Link to={`/college/${college.id}`} className="details-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No colleges found. Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
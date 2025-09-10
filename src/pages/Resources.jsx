// src/pages/Resources.jsx
import React from 'react';
import './Resources.css'; // Import the new CSS file

// Mock data for resources. You can easily add more by adding to this array.
const resourcesData = [
  {
    category: 'E-Books & Notes',
    title: 'NCERT Textbooks',
    description: 'Official textbooks from Class I to XII for all subjects.',
    url: 'https://ncert.nic.in/textbook.php',
    icon: '/assets/icons/book-icon.png'
  },
  {
    category: 'E-Books & Notes',
    title: 'NPTEL Courses',
    description: 'Free online courses and materials from the top IITs.',
    url: 'https://nptel.ac.in/',
    icon: '/assets/icons/lecture-icon.png'
  },
  {
    category: 'Scholarship Portals',
    title: 'National Scholarship Portal (NSP)',
    description: 'A one-stop solution for various government scholarships.',
    url: 'https://scholarships.gov.in/',
    icon: '/assets/icons/scholarship-icon.png'
  },
  {
    category: 'Scholarship Portals',
    title: 'J&K Scholarship Schemes',
    description: 'State-specific scholarships for students of Jammu & Kashmir.',
    url: 'https://jkhighereducation.nic.in/scholarship.html',
    icon: '/assets/icons/scholarship-icon.png'
  },
  {
    category: 'Official Websites',
    title: 'J&K Higher Education Dept.',
    description: 'Official site for all updates on higher education in J&K.',
    url: 'https://highereducation.jk.gov.in/',
    icon: '/assets/icons/gov-icon.png'
  },
  {
    category: 'Official Websites',
    title: 'UGC Official Website',
    description: 'University Grants Commission for university standards.',
    url: 'https://www.ugc.ac.in/',
    icon: '/assets/icons/gov-icon.png'
  },
];

// Helper to get all unique categories from the data
const categories = [...new Set(resourcesData.map(item => item.category))];

export default function Resources() {
  return (
    <div className="resources-page">
      <header className="resources-header">
        <h1>Resources for Your Success</h1>
        <p>
          Access a curated list of free e-books, lecture materials, scholarship portals, and official websites to aid your learning journey.
        </p>
      </header>

      {/* Map through each category and display its resources */}
      {categories.map(category => (
        <section className="resource-category-section" key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="resource-grid">
            {resourcesData
              .filter(resource => resource.category === category)
              .map(resource => (
                <a 
                  href={resource.url} 
                  key={resource.title} 
                  className="resource-card" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="resource-icon">
                    <img src={resource.icon} alt="" />
                  </div>
                  <div className="resource-info">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <div className="resource-arrow">→</div>
                </a>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
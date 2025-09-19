import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    joinedDate: "March 2024",
    role: "Student",
    completedCourses: 8,
    totalCourses: 12,
    currentStreak: 15,
    totalPoints: 2847
  };

  // Mock dashboard data
  const dashboardData = {
    stats: [
      { id: 1, title: "Courses Completed", value: "8/12", icon: "📚", color: "#667eea" },
      { id: 2, title: "Current Streak", value: "15 days", icon: "🔥", color: "#f093fb" },
      { id: 3, title: "Total Points", value: "2,847", icon: "⭐", color: "#4facfe" },
      { id: 4, title: "Certificates", value: "3", icon: "🏆", color: "#f5576c" }
    ],
    recentCourses: [
      { id: 1, title: "React Fundamentals", progress: 85, difficulty: "Intermediate", timeLeft: "2 hours" },
      { id: 2, title: "JavaScript Advanced", progress: 92, difficulty: "Advanced", timeLeft: "30 mins" },
      { id: 3, title: "CSS Grid & Flexbox", progress: 45, difficulty: "Beginner", timeLeft: "4 hours" }
    ],
    upcomingTasks: [
      { id: 1, title: "Complete React Project", dueDate: "Today", priority: "high" },
      { id: 2, title: "JavaScript Quiz", dueDate: "Tomorrow", priority: "medium" },
      { id: 3, title: "CSS Assignment", dueDate: "Dec 28", priority: "low" },
      { id: 4, title: "Portfolio Review", dueDate: "Dec 30", priority: "medium" }
    ],
    achievements: [
      { id: 1, title: "First Course Completed", icon: "🎯", date: "Dec 15" },
      { id: 2, title: "Week Streak", icon: "🔥", date: "Dec 20" },
      { id: 3, title: "Quiz Master", icon: "🧠", date: "Dec 22" }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: 'numeric', 
      minute: '2-digit' 
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#feca57';
      case 'low': return '#48dbfb';
      default: return '#a4b0be';
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="dashboard-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">Aspire Sync</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            <span>Overview</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <span className="nav-icon">📚</span>
            <span>My Courses</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            <span className="nav-icon">📈</span>
            <span>Progress</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <span className="nav-icon">🏆</span>
            <span>Achievements</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link">
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </Link>
          <Link to="/" className="logout-link">
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="dashboard-title">
              {getGreeting()}, {user.name}! 👋
            </h1>
            <p className="dashboard-subtitle">
              Ready to continue your learning journey?
            </p>
          </div>
          <div className="header-right">
            <div className="time-display">
              <span className="current-time">{formatTime(currentTime)}</span>
              <span className="current-date">{currentTime.toLocaleDateString()}</span>
            </div>
            <div className="user-profile">
              <img src={user.avatar} alt="Profile" className="profile-avatar" />
              <div className="profile-info">
                <span className="profile-name">{user.name}</span>
                <span className="profile-role">{user.role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <section className="stats-grid">
                {dashboardData.stats.map((stat) => (
                  <div key={stat.id} className="stat-card" style={{ borderColor: stat.color }}>
                    <div className="stat-icon" style={{ backgroundColor: stat.color + '20' }}>
                      {stat.icon}
                    </div>
                    <div className="stat-info">
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-title">{stat.title}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Main Grid */}
              <div className="content-grid">
                {/* Recent Courses */}
                <section className="content-card">
                  <div className="card-header">
                    <h2 className="card-title">Recent Courses</h2>
                    <Link to="/courses" className="card-action">View All</Link>
                  </div>
                  <div className="courses-list">
                    {dashboardData.recentCourses.map((course) => (
                      <div key={course.id} className="course-item">
                        <div className="course-info">
                          <h3 className="course-title">{course.title}</h3>
                          <div className="course-meta">
                            <span className={`difficulty ${course.difficulty.toLowerCase()}`}>
                              {course.difficulty}
                            </span>
                            <span className="time-left">{course.timeLeft} left</span>
                          </div>
                        </div>
                        <div className="course-progress">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="progress-text">{course.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tasks & Achievements */}
                <div className="right-column">
                  {/* Upcoming Tasks */}
                  <section className="content-card tasks-card">
                    <div className="card-header">
                      <h2 className="card-title">Upcoming Tasks</h2>
                      <span className="task-count">{dashboardData.upcomingTasks.length}</span>
                    </div>
                    <div className="tasks-list">
                      {dashboardData.upcomingTasks.map((task) => (
                        <div key={task.id} className="task-item">
                          <div className="task-priority" style={{ backgroundColor: getPriorityColor(task.priority) }}></div>
                          <div className="task-info">
                            <h4 className="task-title">{task.title}</h4>
                            <span className="task-due">{task.dueDate}</span>
                          </div>
                          <button className="task-check">✓</button>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Recent Achievements */}
                  <section className="content-card achievements-card">
                    <div className="card-header">
                      <h2 className="card-title">Recent Achievements</h2>
                    </div>
                    <div className="achievements-list">
                      {dashboardData.achievements.map((achievement) => (
                        <div key={achievement.id} className="achievement-item">
                          <span className="achievement-icon">{achievement.icon}</span>
                          <div className="achievement-info">
                            <h4 className="achievement-title">{achievement.title}</h4>
                            <span className="achievement-date">{achievement.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </>
          )}

          {activeTab === 'courses' && (
            <section className="tab-content">
              <h2 className="tab-title">My Courses</h2>
              <div className="courses-grid">
                {dashboardData.recentCourses.map((course) => (
                  <div key={course.id} className="course-card">
                    <div className="course-card-header">
                      <h3>{course.title}</h3>
                      <span className={`difficulty ${course.difficulty.toLowerCase()}`}>
                        {course.difficulty}
                      </span>
                    </div>
                    <div className="course-card-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{course.progress}% Complete</span>
                    </div>
                    <button className="continue-btn">Continue Learning</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'progress' && (
            <section className="tab-content">
              <h2 className="tab-title">Learning Progress</h2>
              <div className="progress-overview">
                <div className="progress-stat">
                  <h3>Overall Completion</h3>
                  <div className="large-progress-circle">
                    <span className="progress-percentage">67%</span>
                  </div>
                </div>
                <div className="progress-details">
                  <div className="progress-item">
                    <span>Courses Completed</span>
                    <span>8 of 12</span>
                  </div>
                  <div className="progress-item">
                    <span>Hours Studied</span>
                    <span>127 hours</span>
                  </div>
                  <div className="progress-item">
                    <span>Average Score</span>
                    <span>92%</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'achievements' && (
            <section className="tab-content">
              <h2 className="tab-title">Achievements</h2>
              <div className="achievements-grid">
                {dashboardData.achievements.map((achievement) => (
                  <div key={achievement.id} className="achievement-card">
                    <div className="achievement-card-icon">{achievement.icon}</div>
                    <h3>{achievement.title}</h3>
                    <p>Earned on {achievement.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
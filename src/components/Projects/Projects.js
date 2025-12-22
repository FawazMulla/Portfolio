import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Student Management System",
      category: "full-stack",
      description: "A comprehensive web application for managing student records, courses, and grades. Built as a semester project using modern web technologies.",
      technologies: ["React", "Node.js", "Express", "MySQL", "Bootstrap"],
      metrics: {
        features: "15+",
        users: "50+",
        grade: "A+"
      },
      links: {
        github: "#",
        live: "#",
        case: "#"
      },
      featured: true
    },
    {
      title: "Personal Finance Tracker",
      category: "frontend",
      description: "A responsive web app to track personal expenses and income with interactive charts and budget planning features.",
      technologies: ["JavaScript", "Chart.js", "Local Storage", "CSS3"],
      metrics: {
        categories: "10+",
        charts: "5",
        responsive: "100%"
      },
      links: {
        github: "#",
        live: "#",
        case: "#"
      },
      featured: true
    },
    {
      title: "Library Management API",
      category: "backend",
      description: "RESTful API for managing library books, members, and borrowing records with authentication and data validation.",
      technologies: ["Python", "Flask", "SQLite", "JWT", "Postman"],
      metrics: {
        endpoints: "12",
        tables: "4",
        tests: "25+"
      },
      links: {
        github: "#",
        live: "#",
        case: "#"
      },
      featured: false
    },
    {
      title: "Weather Dashboard",
      category: "frontend",
      description: "Interactive weather application displaying current conditions and forecasts using external APIs with geolocation support.",
      technologies: ["JavaScript", "Weather API", "Geolocation", "CSS Grid"],
      metrics: {
        cities: "1000+",
        accuracy: "Real-time",
        features: "8"
      },
      links: {
        github: "#",
        live: "#",
        case: "#"
      },
      featured: true
    },
    {
      title: "Task Management CLI",
      category: "backend",
      description: "Command-line application for managing daily tasks with file persistence and priority sorting functionality.",
      technologies: ["Python", "JSON", "Argparse", "File I/O"],
      metrics: {
        commands: "8",
        features: "Priority",
        storage: "JSON"
      },
      links: {
        github: "#",
        live: "#",
        case: "#"
      },
      featured: false
    },
    {
      title: "Recipe Sharing Platform",
      category: "full-stack",
      description: "Social platform for sharing and discovering recipes with user authentication, ratings, and search functionality.",
      technologies: ["React", "Firebase", "CSS Modules", "React Router"],
      metrics: {
        recipes: "100+",
        users: "30+",
        ratings: "4.8/5"
      },
      links: {
        github: "#",
        live: "#",
        case: "#"
      },
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Academic and personal projects showcasing my learning journey and technical growth
          </p>
        </div>

        <div className="projects-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <div className="featured-badge">Featured</div>}
              
              <div className="project-image">
                <div className="project-placeholder">
                  <h3>{project.title}</h3>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.links.github} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a href={project.links.live} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.links.case} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
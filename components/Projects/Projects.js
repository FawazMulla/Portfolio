import { useState, useEffect, useCallback } from 'react';

const categoryLabel = (cat) => {
  const map = { 'ai-ml': 'AI / ML', 'full-stack': 'Full-Stack', 'frontend': 'Frontend', 'backend': 'Backend' };
  return map[cat] || cat;
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null);

  const projects = [
    {
      title: "Nyaya Sahayak",
      subtitle: "AI Legal Intelligence System",
      category: "ai-ml",
      description: "ML-based legal platform with case outcome prediction, RAG-powered chatbot on Indian High Court cases, and semantic legal search via NLP embeddings.",
      longDescription: "Nyaya Sahayak is a comprehensive AI-powered legal intelligence system built to democratize access to legal knowledge in India. The system uses InLegalBERT — a domain-specific BERT model fine-tuned on Indian legal text — combined with SVM and Logistic Regression classifiers to predict case outcomes. A RAG-based chatbot allows users to ask natural language questions and receive context-aware answers grounded in real Indian High Court judgments. Semantic search using NLP embeddings enables retrieval of similar past cases, helping lawyers and citizens find relevant precedents instantly.",
      technologies: ["InLegalBERT", "SVM", "Logistic Regression", "RAG", "NLP", "Python"],
      period: "Jan – Apr 2026",
      links: { github: "https://github.com/FawazMulla/nyayashayak", live: null },
      featured: true,
      highlight: "AI / Legal Tech"
    },
    {
      title: "Ascend APEX",
      subtitle: "Platform for Excellence — Hackathon Winner",
      category: "full-stack",
      description: "1st place at Xcelarate 2025 (national hackathon). Student platform with AI-driven career readiness reports, faculty-validated Skill Passports, and a WellBeing Check.",
      longDescription: "Ascend APEX won 1st place at Xcelarate 2025, a national-level hackathon. It is a student-centric platform that bridges the gap between academics and career readiness. Faculty-validated Skill Passports give students credible proof of their abilities. An AI-driven market analysis engine generates personalized Readiness Reports that identify skill gaps and recommend courses or projects. The Ascend WellBeing Check monitors student emotional trends and triggers adaptive UI changes and advisor notifications to provide timely support.",
      technologies: ["Oracle APEX", "AI", "SQL", "JavaScript"],
      period: "Jun – Sep 2025",
      links: { github: null, live: null },
      featured: true,
      highlight: "National Winner"
    },
    {
      title: "Sunrise Power",
      subtitle: "Full-Stack Business Web App",
      category: "full-stack",
      description: "Production-grade Django web app built for a real client as a freelance project. Deployed live on Render with dynamic content and contact management.",
      longDescription: "Sunrise Power is a production-grade full-stack web application built as a freelance/outhouse project for a real client. Developed using Django with a clean, responsive frontend, the app serves as the company's digital presence. It includes dynamic content management, contact forms, and is deployed live on Render for public access.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      period: "Dec 2025 – Jan 2026",
      links: { github: "https://github.com/FawazMulla/SunrisePower", live: "https://sunrisepower.onrender.com/" },
      featured: true,
      highlight: "Outhouse project"
    },
    {
      title: "FortAscension",
      subtitle: "Legacy Code Revival Lab",
      category: "ai-ml",
      description: "Transforms legacy Fortran models into modern Python with drift analysis and AI insights. Real-time code execution via WebSocket with a React frontend.",
      longDescription: "FortAscension is a full-stack web application that modernizes legacy Fortran numerical models by converting them into clean Python implementations. It performs drift analysis to highlight behavioral differences between the original and converted code, and uses AI to generate insights and recommendations. The app features real-time code execution powered by WebSocket, a React frontend with Halloween-themed UI, and personalized resurrection certificates for completed migrations.",
      technologies: ["React", "Node.js", "Express", "WebSocket", "Python", "AI"],
      period: "Dec 2025",
      links: { github: "https://github.com/FawazMulla/FortAscension", live: null },
      featured: false,
      highlight: "AI + Real-time"
    },
    {
      title: "Data Structure Visualizer",
      subtitle: "Interactive DSA Learning Tool",
      category: "frontend",
      description: "Step-by-step visual animations for stacks, queues, linked lists, trees, graphs, and sorting algorithms. Built to build intuition for how DSA works.",
      longDescription: "The Data Structure Visualizer is an educational tool that brings data structures and algorithms to life through interactive, step-by-step animations. Built with Python, it supports visualization of stacks, queues, linked lists, trees, graphs, and sorting algorithms. Designed to help students and developers build intuition for how data structures behave under different operations.",
      technologies: ["Python", "Visualization", "Algorithms"],
      period: "Apr 2025",
      links: { github: "https://github.com/FawazMulla/Data-Structure-visualizer", live: null },
      featured: false,
      highlight: "EdTech"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full-Stack' },
    { id: 'ai-ml', label: 'AI / ML' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const openModal = (project) => {
    setModal(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Real-world projects spanning AI/ML, full-stack web, and developer tooling
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
            <div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
            >
              <div className="project-card-top">
                <span className="project-category-tag">{categoryLabel(project.category)}</span>
                <div className="project-card-top-right">
                  {project.featured && <span className="featured-badge">Featured</span>}
                  <span className="project-highlight-tag">{project.highlight}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-title-block">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge tech-badge-more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-card-footer">
                  <span className="project-period">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {project.period}
                  </span>
                  <span className="project-view-more">
                    Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="modal-close" onClick={closeModal} aria-label="Close (Esc)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-header-top">
                <span className="project-category-tag">{categoryLabel(modal.category)}</span>
                <span className="project-highlight-tag">{modal.highlight}</span>
              </div>
              <h2 className="modal-title">{modal.title}</h2>
              <p className="modal-subtitle">{modal.subtitle}</p>
              <span className="modal-period">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {modal.period}
              </span>
            </div>

            <div className="modal-body">
              <p className="modal-description">{modal.longDescription}</p>

              <div className="modal-tech">
                <h4>Tech Stack</h4>
                <div className="project-tech">
                  {modal.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {(modal.links.github || modal.links.live) && (
                <div className="modal-links">
                  {modal.links.github && (
                    <a href={modal.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {modal.links.live && (
                    <a href={modal.links.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

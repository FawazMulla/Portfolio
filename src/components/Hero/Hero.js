import React, { useEffect, useState, useMemo } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');

  const roles = useMemo(() => [
    'IT Student',
    'Full stack Developer',
    'Solutions Architect',
    'Tech Enthusiast',
    'Database Engineer'
  ], []);

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = contactSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn('Contact section not found');
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = projectsSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <span>3rd Year IT Student</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Mohammed Fawaz Mulla</span>
          </h1>

          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            I architect and deploy end-to-end full-stack systems, from databases to production.
            Using low-code, automation, and AI, I ship fast without sacrificing scale or quality.
            I build real-world products designed for impact, performance, and growth.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">3rd</div>
              <div className="stat-label">Year Student</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">30+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">8.2</div>
              <div className="stat-label">GPA</div>
            </div>
          </div>

          <div className="hero-actions">
            <button onClick={scrollToProjects} className="btn btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={scrollToContact} className="btn btn-secondary">
              Get in Touch
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/FawazMulla" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mohammed-fawaz-mulla-134b1928a/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:fawazmullas5@gmail.com?subject=From%20Portfolio%20Website" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-section">
            <div className="profile-photo">
              <img
                src={`${process.env.PUBLIC_URL}/images/profile-photo.JPG`}
                style={{ border: '5px solid red' }}
                loading="lazy"
                alt="Mohammed Fawaz Mulla - IT Student"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{ display: 'none' }}>
                <div className="placeholder-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Add your photo to here<br />/public/images/profile-photo.jpg</p>
              </div>
            </div>
          </div>

          <div className="visual-card">
            <div className="code-snippet">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">portfolio.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> SolutionsArchitect</span>
                  <span className="code-operator"> = </span>
                  <span className="code-bracket">{'{'}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">name:</span>
                  <span className="code-string">'Mohammed Fawaz Mulla'</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">year:</span>
                  <span className="code-number">3</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">passion:</span>
                  <span className="code-string">'Technology'</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">skills:</span>
                  <span className="code-bracket">[</span>
                  <span className="code-string">'Full Stack'</span>,
                  <span className="code-string">'Low Code'</span>,
                  <span className="code-string">'Cloud'</span>,
                  <span className="code-string">'System Design'</span>
                  <span className="code-bracket">]</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from 'react';
import Link from "next/link";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Developer",
      issuer: "Scrimba",
      year: "2025",
      level: "Certification",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Scrimba_logo.svg/512px-Scrimba_logo.svg.png",
      logoFallback: "S",
      logoColor: "#f89820",
      link: "https://drive.google.com/file/d/1S1ZIT7MN8JOrEOPin0eEy7-jk3ysxFgX/view?usp=drive_link"
    },
    {
      name: "AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      level: "Associate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      logoFallback: "O",
      logoColor: "#f80000",
      link: "https://drive.google.com/file/d/1Bm-TNM2Ip5rJV92CZB5iHnUviEQQLyST/view?usp=sharing"
    },
    {
      name: "Python Programming",
      issuer: "Coursera",
      year: "2023",
      level: "Course Certificate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/512px-Coursera-Logo_600x600.svg.png",
      logoFallback: "C",
      logoColor: "#0056d2"
    },
    {
      name: "Git Version Control",
      issuer: "GitHub",
      year: "2024",
      level: "Badge",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      logoFallback: "G",
      logoColor: "#f05032"
    },
    {
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2024",
      level: "Certification",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/FreeCodeCamp_logo.svg",
      logoFallback: "fCC",
      logoColor: "#0a0a23"
    },
    {
      name: "Database Design",
      issuer: "University",
      year: "2024",
      level: "Course Completion",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      logoFallback: "DB",
      logoColor: "#4479a1"
    }
  ];

  const academicSkills = [
    { name: "Data Structures & Algorithms", description: "Advanced coursework completed", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Database Design", description: "Relational and NoSQL databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Software Engineering", description: "SDLC, Agile methodologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Network Fundamentals", description: "TCP/IP, OSI model, protocols", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Object-Oriented Programming", description: "Design patterns, SOLID principles", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "System Analysis & Design", description: "Requirements analysis, UML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Comprehensive skill set developed through coursework, projects, and continuous learning
          </p>
        </div>

        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Skills
          </button>
          <button
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
          <button
            className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            Academic Focus
          </button>
        </div>

        <div className="skills-content">
          {activeTab === 'technical' && (
            <div className="technical-skills">
              {technicalSkills.map((category, index) => (
                <div key={index} className="skill-category">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-card">
                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="cert-logo"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                      <div className="cert-logo-fallback" style={{ background: cert.logoColor, display: 'none' }}>
                        {cert.logoFallback}
                      </div>
                    </div>
                    <div className="cert-level">{cert.level}</div>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-footer">
                      <span className="cert-year">{cert.year}</span>
                      {cert.link ? (
                        <Link
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-status-link"
                        >
                          <div className="cert-status">
                            <span className="status-dot"></span>
                            Verified
                          </div>
                        </Link>
                      ) : (
                        <div className="cert-status">
                          <span className="status-dot"></span>
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'academic' && (
            <div className="academic-skills">
              <div className="academic-grid">
                {academicSkills.map((skill, index) => (
                  <div key={index} className="academic-card">
                    <div className="academic-header">
                      <img src={skill.logo} alt={skill.name} className="academic-logo" />
                      <h4 className="academic-name">{skill.name}</h4>
                    </div>
                    <p className="academic-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section >
  );
};

export default Skills;
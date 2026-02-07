import { useState } from 'react';
import Link from "next/link";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", color: "#3776ab" },
        { name: "Java", color: "#f89820" },
        { name: "JavaScript", color: "#f7df1e" },
        { name: "C++", color: "#00599c" },
        { name: "HTML/CSS", color: "#e34f26" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", color: "#61dafb" },
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#000000" },
        { name: "Bootstrap", color: "#7952b3" },
        { name: "REST APIs", color: "#58a6ff" }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL", color: "#4479a1" },
        { name: "MongoDB", color: "#47a248" },
        { name: "Git/GitHub", color: "#f05032" },
        { name: "VS Code", color: "#007acc" },
        { name: "Linux", color: "#fcc624" }
      ]
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Developer",
      issuer: "Scrimba",
      year: "2025",
      level: "certification",
      color: "#f89820",
      link: "https://drive.google.com/file/d/1S1ZIT7MN8JOrEOPin0eEy7-jk3ysxFgX/view?usp=drive_link"
    },
    {
      name: "AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      level: "Associate",
      color: "#0a0a23",
      link: "https://drive.google.com/file/d/1Bm-TNM2Ip5rJV92CZB5iHnUviEQQLyST/view?usp=sharing"
    },
    {
      name: "Python Programming",
      issuer: "Coursera",
      year: "2023",
      level: "Course Certificate",
      color: "#3776ab"
    },
    {
      name: "Git Version Control",
      issuer: "GitHub",
      year: "2024",
      level: "Badge",
      color: "#f05032"
    },
    {
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2024",
      level: "Certification",
      color: "#f7df1e"
    },
    {
      name: "Database Design",
      issuer: "University",
      year: "2024",
      level: "Course Completion",
      color: "#4479a1"
    }
  ];

  const academicSkills = [
    { name: "Data Structures & Algorithms", description: "Advanced coursework completed" },
    { name: "Database Design", description: "Relational and NoSQL databases" },
    { name: "Software Engineering", description: "SDLC, Agile methodologies" },
    { name: "Network Fundamentals", description: "TCP/IP, OSI model, protocols" },
    { name: "Object-Oriented Programming", description: "Design patterns, SOLID principles" },
    { name: "System Analysis & Design", description: "Requirements analysis, UML" }
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
                        <div className="skill-header">
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                          </div>
                        </div>
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
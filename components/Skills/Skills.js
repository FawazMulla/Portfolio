import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      category: "Frontend & Backend Frameworks",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" }
      ]
    },
    {
      category: "Databases & Platforms",
      skills: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Oracle DB 23ai", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "DynamoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Oracle APEX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      year: "2025",
      level: "Certification",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      logoFallback: "AWS",
      logoColor: "#FF9900",
      link: "https://drive.google.com/file/d/12gWsIXygwQovKj6_IR_pfWWC1zXD94Nk/view?usp=drive_link"
    },
    {
      name: "Microservices and CI/CD Pipeline Builder",
      issuer: "AWS Academy",
      year: "2025",
      level: "Certification",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      logoFallback: "AWS",
      logoColor: "#FF9900",
      link :"https://drive.google.com/file/d/1AswqUgv74Rx42H00j6Y03ctOXkDpO0iM/view?usp=drive_link"
    },
     {
      name: "Cloud Web Application Builder",
      issuer: "AWS Academy",
      year: "2025",
      level: "Certification",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      logoFallback: "AWS",
      logoColor: "#FF9900",
      link :"https://drive.google.com/file/d/169CasGVMelkMb0AUb0YcdRi3J9UOQ8wl/view?usp=drive_link"
    },
    {
      name: "OCI 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      level: "Associate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      logoFallback: "O",
      logoColor: "#f80000",
      link:"https://drive.google.com/file/d/1Bm-TNM2Ip5rJV92CZB5iHnUviEQQLyST/view?usp=drive_link"
    },
    {
      name: "Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
      level: "Professional",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      logoFallback: "O",
      logoColor: "#f80000",
      link:"https://drive.google.com/file/d/1AZsF95dmnyfHo67rEh6twycfHLc99nIq/view?usp=drive_link"
    },
    {
      name: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      year: "2025",
      level: "Professional",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      logoFallback: "O",
      logoColor: "#f80000",
      link:"https://drive.google.com/file/d/1dln6KoTXe16s3S-ejtT4f6t3d8cPE9sh/view?usp=drive_link"
    },
    {
      name: "OCI 2025 Certified Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      level: "Associate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      logoFallback: "O",
      logoColor: "#f80000",
      link:"https://drive.google.com/file/d/1bRqwMzdx68dIAatC94eHm1HFZrRrKvHN/view?usp=drive_link"
    },
    {
      name: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      year: "2025",
      level: "Professional",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      logoFallback: "O",
      logoColor: "#f80000",
      link:"https://drive.google.com/file/d/1ke4Ud9D0LObD6j_THRyz-qLVfTqaZ4Kr/view?usp=drive_link"
    },
    {
      name: "The Fullstack Developer Path",
      issuer: "Scrimba",
      year: "2025",
      level: "Course",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/40/d548ef33b3401f942edc9c24840b52/social.png?auto=format%2Ccompress&dpr=1&w=180&h=180",
      logoFallback: "S",
      logoColor: "#f89820",
      link: "https://drive.google.com/file/d/1S1ZIT7MN8JOrEOPin0eEy7-jk3ysxFgX/view?usp=drive_link"
    },
    {
      name: "Red Hat Academy (RHA 124)",
      issuer: "Red Hat",
      year: "2025",
      level: "Course",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
      logoFallback: "RH",
      logoColor: "#EE0000",
      link:"https://drive.google.com/file/d/1-Owz6HTCbqVtMcAD7AFcQ-Ro96kED05-/view?usp=drive_link"
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
                <div
                  key={index}
                  className="certification-card"
                  onClick={() => cert.link && window.open(cert.link, '_blank', 'noopener,noreferrer')}
                  style={cert.link ? { cursor: 'pointer' } : {}}
                >
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
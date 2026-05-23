const Experience = () => {
  const experiences = [
    {
      title: "Information Technology Student",
      company: "M.H Saboo Siddik College of Engineering",
      period: "Aug 2023 - 2027",
      location: "Mumbai, Maharashtra",
      type: "Student",
      description: "Pursuing Bachelor of Engineering in Information Technology at Mumbai University with a strong focus on full-stack development, cloud, and AI integration.",
      achievements: [
        "Maintaining a CGPA of 8.19/10 across coursework in software engineering, databases, and systems",
        "Strong foundation in Data Structures, Algorithms, and Database Design through hands-on learning",
        "Designed, built, and deployed multiple full-stack web applications using modern technologies",
        "Active member of the ACM Chapter of MHSSCE"
      ],
      technologies: ["Coding", "Database", "System Design", "DSA", "Version Control", "Cloud", "Networking"]
    },
    {
      title: "Web Development Intern",
      company: "Techiolaza Innovations",
      period: "Aug 2025 - Oct 2025",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      description: "Designed and developed responsive, user-centric web interfaces and maintained backend systems for real client projects.",
      achievements: [
        "Designed and developed responsive, user-centric web interfaces",
        "Designed and maintained PHP database scripts for backend operations",
        "Implemented API integrations for dynamic and scalable web applications"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Git", "Bootstrap", "React"]
    },
    {
      title: "SDE Intern",
      company: "Bitkraft Technology",
      period: "Feb 2026 - Present",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      description: "Worked across game development, fintech, and automation domains, building production-grade systems using modern tech stacks.",
      achievements: [
        "Built game systems and functionalities in Unity & C#",
        "Built a fintech application using Next.js, Python, and PostgreSQL with AI-based process automation",
        "Created a lead automation solution using Power Automate & Python"
      ],
      technologies: ["Unity", "C#", "Next.js", "Python", "PostgreSQL", "Power Automate", "AI"]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Academic & Work Experience</h2>
          <p className="section-subtitle">
            My journey through education and practical experience in technology
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="job-info">
                      <h3 className="job-title">{exp.title}</h3>
                      <div className="company-info">
                        <span className="company-name">{exp.company}</span>
                        <span className="job-type">{exp.type}</span>
                      </div>
                    </div>
                    <div className="job-meta">
                      <div className="job-period">{exp.period}</div>
                      <div className="job-location">{exp.location}</div>
                    </div>
                  </div>

                  <p className="job-description">{exp.description}</p>

                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
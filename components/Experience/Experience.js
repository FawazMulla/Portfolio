const Experience = () => {
  const experiences = [
    {
      title: "Information Technology Student",
      company: "M.H Saboo Siddik College of engineering",
      period: "2023 - Present",
      location: "Mumbai, Maharashtra",
      type: "Student",
      description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development, database systems, and network administration.",
      achievements: [
        "Maintaining an 8.2 GPA while completing advanced programming and systems coursework",
        "Strong foundation in Data Structures, Algorithms, and Database Design through hands-on learning",
        "Designed, built, and deployed multiple full-stack web applications using modern technologies",
        "Actively participated in coding challenges, hackathons, and project-based competitions"
      ],
      technologies: ["Coding", "Database", "System Design", "DSA", "Version Control","Cloud","Networking"]
    },
    {
      title: "Web Development Intern",
      company: "TechioLaza Innovations",
      period: "Summer 2025",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      description: "Gained hands-on experience in web development while working on real client projects and learning industry best practices.",
      achievements: [
        "Developed responsive websites for 3 small business clients",
        "Implemented API integrations for dynamic and scalable web applications.",
        "Assisted in testing and debugging existing web applications",
        "Created documentation for project handoffs and maintenance"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "PHP", "Bootstrap","React"]
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
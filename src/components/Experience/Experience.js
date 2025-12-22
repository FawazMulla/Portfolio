import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Information Technology Student",
      company: "University Name",
      period: "2022 - Present",
      location: "City, State",
      type: "Full-time",
      description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development, database systems, and network administration.",
      achievements: [
        "Maintaining 3.8 GPA while taking advanced programming courses",
        "Completed coursework in Data Structures, Algorithms, and Database Design",
        "Built multiple web applications using modern frameworks and technologies",
        "Participated in coding competitions and hackathons"
      ],
      technologies: ["Java", "Python", "JavaScript", "React", "MySQL", "Git"]
    },
    {
      title: "Web Development Intern",
      company: "Local Tech Company",
      period: "Summer 2024",
      location: "City, State",
      type: "Internship",
      description: "Gained hands-on experience in web development while working on real client projects and learning industry best practices.",
      achievements: [
        "Developed responsive websites for 3 small business clients",
        "Learned version control and collaborative development workflows",
        "Assisted in testing and debugging existing web applications",
        "Created documentation for project handoffs and maintenance"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "Bootstrap"]
    },
    {
      title: "Computer Science Tutor",
      company: "University Tutoring Center",
      period: "2023 - Present",
      location: "Campus",
      type: "Part-time",
      description: "Helping fellow students understand programming concepts and complete assignments in introductory computer science courses.",
      achievements: [
        "Tutored 20+ students in Python and Java programming fundamentals",
        "Improved student understanding of object-oriented programming concepts",
        "Developed study materials and practice problems for common topics",
        "Maintained 95% student satisfaction rating"
      ],
      technologies: ["Python", "Java", "C++", "Algorithm Design", "Problem Solving"]
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
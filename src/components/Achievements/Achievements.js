import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner - Xcelarate - 2025",
      description: "First place winner at the national level hackathon with our innovative application Ascend Apex (Platform4Excellance) made using OracleApex.",
      date: "March 2024",
      category: "Competition",
      image: `${process.env.PUBLIC_URL}/images/hackathon-win.jpg`,
      details: [
        "Backend & database engineer",
        "Built a full-stack web application ",
        "Implemented real-time collaboration features ",
        "Presented to a panel of industry judges of Oracle"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      award: "1st Place & Best Innovation Award"
    },
   
  ];

  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements </h2>
          <p className="section-subtitle">
            Milestones and accomplishments that showcase my dedication to excellence in technology and academics
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`achievement-card ${achievement.image ? 'featured' : ''}`}>
              {achievement.image && (
                <div className="achievement-image">
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    style={{
    display: "block",
    width: "200px",
    height: "200px",
    position: "relative",
    zIndex: 9999,
    border: "5px solid red"
  }}
                    onError={(e) => {
              e.currentTarget.style.display = "none";
              const placeholder = e.currentTarget.parentElement.querySelector(".achivement-image-placeholder");
              if (placeholder) placeholder.style.display = "flex";
            }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <div className="placeholder-icon">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>Add photo to<br/>/public/images/hackathon-win.jpg</p>
                  </div>
                  {achievement.award && (
                    <div className="award-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {achievement.award}
                    </div>
                  )}
                </div>
              )}
              
              <div className="achievement-content">
                <div className="achievement-header">
                  <div className="achievement-meta">
                    <span className="achievement-category">{achievement.category}</span>
                    <span className="achievement-date">{achievement.date}</span>
                  </div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>

                <div className="achievement-details">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {achievement.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {achievement.technologies && (
                  <div className="achievement-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {achievement.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

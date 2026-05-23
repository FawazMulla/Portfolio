import Image from 'next/image';
import { getAssetPath } from '../../utils/paths';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Xcelarate 2025 Winner – National Level Hackathon",
      description: "First place at Xcelarate 2025, a national-level hackathon, with Ascend APEX — a student-centric platform bridging academics and career readiness, built on Oracle APEX.",
      date: "2025",
      category: "Competition",
      image: getAssetPath("images/hackathon-win.JPG"),
      details: [
        "Built Ascend APEX with AI-driven market analysis and personalized Readiness Reports",
        "Implemented Skill Passports validated by faculty for credibility",
        "Integrated Ascend WellBeing Check to monitor student emotional trends",
        "Presented to a panel of industry judges from Oracle"
      ],
      technologies: ["Oracle APEX", "AI", "SQL", "JavaScript"],
      award: "1st Place – Xcelarate 2025"
    },
    {
      id: 2,
      title: "ACM Chapter Member – MHSSCE",
      description: "Active member of the ACM (Association for Computing Machinery) Chapter at M.H. Saboo Siddik College of Engineering, contributing to tech events and community initiatives.",
      date: "2023 – Present",
      category: "Community",
      image: null,
      details: [
        "Participated in ACM-organized workshops and coding events",
        "Collaborated with peers on technical projects and knowledge sharing"
      ],
      technologies: [],
      award: null
    }
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
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={400}
                    height={300}
                    className="achievement-img"
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
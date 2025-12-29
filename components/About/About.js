const About = () => {
  const achievements = [
    {
      metric: "8.2",
      label: "Current GPA",
      description: "Maintaining strong academic performance"
    },
    {
      metric: "30+",
      label: "Projects Built",
      description: "Academic and personal coding projects"
    },
    {
      metric: "8+",
      label: "Technologies",
      description: "Programming languages and frameworks learned"
    },
    {
      metric: "3+",
      label: "Years Coding",
      description: "Continuous learning and skill development"
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                A passionate IT student dedicated to learning and building innovative solutions
              </p>
            </div>

            <div className="about-description">
              <p>
                I'm a student and full-stack developer pursuing my degree at
                <strong> M.H Saboo Siddik College of engineering currently in 3rd year of Information Technology.
                </strong>.
              </p>

              <p>
                I build and deploy end-to-end applications, working across backend systems, databases, and APIs
                to deliver clean, scalable, production-ready solutions.
              </p>

              <p>
                I leverage low-code platforms, automation, and AI to ship faster and build smarter,
                without compromising on quality or performance.
              </p>

              <p>
                My mission is to become a high-impact engineer and build products that scale, matter,
                and make a real difference.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Quick Learner</h4>
                  <p>Rapidly adapting to new technologies and programming concepts</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Creative Thinker</h4>
                  <p>Approaching challenges with innovative solutions and fresh perspectives</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Team Player</h4>
                  <p>Working effectively with teams to build, ship, and improve products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-metrics">
            <div className="metrics-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-value">{achievement.metric}</div>
                  <div className="metric-label">{achievement.label}</div>
                  <div className="metric-description">{achievement.description}</div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <h3>Let's Learn Together</h3>
              <p>
                Interested in collaborating on projects or sharing knowledge?
                I'm always excited to connect with fellow students and developers.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">
                  Get in Touch
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
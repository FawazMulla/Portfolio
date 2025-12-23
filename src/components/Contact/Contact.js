import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ EmailJS submission (ONLY LOGIC CHANGE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_PUBLIC_KEY
      );

      alert("Thanks for reaching out! I'll get back to you soon.");

      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Email",
      value: "student@university.edu",
      link: "mailto:student@university.edu"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Discord",
      value: "StudentDev#1234",
      link: "#"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Location",
      value: "University Campus",
      link: "#"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Response Time",
      value: "Usually within a day",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Interested in collaborating on projects or discussing technology? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Get in Touch</h3>
              <p>
                Whether you want to collaborate on a project, discuss technology, or just chat about 
                programming, I'm always excited to connect with fellow students and developers.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-method">
                  <div className="method-icon">{info.icon}</div>
                  <div className="method-info">
                    <div className="method-title">{info.title}</div>
                    <div className="method-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Open to collaborations</span>
              </div>
              <p>Always interested in learning opportunities and project collaborations.</p>
            </div>
          </div>

          {/* ✅ FULL FORM RESTORED */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Message Type *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select message type</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="study-group">Study Group</option>
                <option value="tech-discussion">Tech Discussion</option>
                <option value="networking">Networking</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me what you'd like to discuss or collaborate on..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



















// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       alert('Thanks for reaching out! I\'ll get back to you soon.');
//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         subject: '',
//         message: ''
//       });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const contactInfo = [
//     {
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       ),
//       title: "Email",
//       value: "student@university.edu",
//       link: "mailto:student@university.edu"
//     },
//     {
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       ),
//       title: "Discord",
//       value: "StudentDev#1234",
//       link: "#"
//     },
//     {
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       ),
//       title: "Location",
//       value: "University Campus",
//       link: "#"
//     },
//     {
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       ),
//       title: "Response Time",
//       value: "Usually within a day",
//       link: "#"
//     }
//   ];

//   return (
//     <section id="contact" className="contact section-padding">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Let's Connect</h2>
//           <p className="section-subtitle">
//             Interested in collaborating on projects or discussing technology? I'd love to hear from you!
//           </p>
//         </div>

//         <div className="contact-content">
//           <div className="contact-info">
//             <div className="info-header">
//               <h3>Get in Touch</h3>
//               <p>
//                 Whether you want to collaborate on a project, discuss technology, or just chat about 
//                 programming, I'm always excited to connect with fellow students and developers.
//               </p>
//             </div>

//             <div className="contact-methods">
//               {contactInfo.map((info, index) => (
//                 <a key={index} href={info.link} className="contact-method">
//                   <div className="method-icon">{info.icon}</div>
//                   <div className="method-info">
//                     <div className="method-title">{info.title}</div>
//                     <div className="method-value">{info.value}</div>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div className="availability-status">
//               <div className="status-indicator">
//                 <div className="status-dot"></div>
//                 <span>Open to collaborations</span>
//               </div>
//               <p>Always interested in learning opportunities and project collaborations.</p>
//             </div>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Full Name *</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="John Doe"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email Address *</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="john@company.com"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="company">Company</label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Your Company"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="subject">Message Type *</label>
//               <select
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select message type</option>
//                 <option value="collaboration">Project Collaboration</option>
//                 <option value="study-group">Study Group</option>
//                 <option value="tech-discussion">Tech Discussion</option>
//                 <option value="networking">Networking</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Your Message *</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="6"
//                 placeholder="Tell me what you'd like to discuss or collaborate on..."
//               ></textarea>
//             </div>

//             <button 
//               type="submit" 
//               className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="spinner"></div>
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   Send Message
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <polygon points="22,2 15,22 11,13 2,9 22,2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };
// import emailjs from '@emailjs/browser';

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     await emailjs.send(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       {
//         from_name: formData.name,
//         from_email: formData.email,
//         company: formData.company,
//         subject: formData.subject,
//         message: formData.message,
//       },
//       'YOUR_PUBLIC_KEY'
//     );

//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', company: '', subject: '', message: '' });
//   } catch (error) {
//     alert('Error sending message. Please try again.');
//   } finally {
//     setIsSubmitting(false);
//   }
// };

// export default Contact;
# Portfolio Content Customization Guide

This guide will help you customize the content of your React portfolio website. Each section can be easily modified by editing the corresponding component files.

## 📁 File Structure

```
src/
├── components/
│   ├── Hero/Hero.js          # Main landing section
│   ├── About/About.js        # About me section
│   ├── Experience/Experience.js  # Work/project experience
│   ├── Skills/Skills.js      # Technical skills & certifications
│   ├── Projects/Projects.js  # Project showcase
│   ├── Contact/Contact.js    # Contact information
│   ├── Footer/Footer.js      # Footer links & info
│   └── Navbar/Navbar.js      # Navigation menu
└── contexts/ThemeContext.js  # Dark/light mode settings
```

## 🎯 Section-by-Section Customization

### 1. Hero Section (`src/components/Hero/Hero.js`)

**What to change:**
- Personal name and title
- Typing animation text
- Description paragraph
- Statistics (GPA, Projects, etc.)
- Social media links

**Key variables to modify:**
```javascript
// Line 6-8: Personal info
const name = "Sarah Johnson";  // Change your name
const title = "3rd Year IT Student";  // Change your title

// Line 10-15: Typing animation texts
const typingTexts = [
  "Full-Stack Developer",     // Change these to your roles
  "Problem Solver",
  "Tech Enthusiast",
  "Future Software Engineer"
];

// Line 17-19: Description
const description = "Passionate about creating innovative solutions...";  // Your description

// Line 21-35: Statistics
const stats = [
  { value: "3.8", label: "GPA" },           // Your GPA
  { value: "15+", label: "Projects" },      // Number of projects
  { value: "5+", label: "Technologies" }    // Technologies learned
];

// Line 37-50: Social links
const socialLinks = [
  { icon: "github", url: "https://github.com/yourusername" },     // Your GitHub
  { icon: "linkedin", url: "https://linkedin.com/in/yourname" },  // Your LinkedIn
  { icon: "email", url: "mailto:your.email@example.com" }         // Your email
];
```

### 2. About Section (`src/components/About/About.js`)

**What to change:**
- Personal story and background
- Highlights and achievements
- Metrics (courses, projects, etc.)
- Call-to-action buttons

**Key variables to modify:**
```javascript
// Line 8-12: About description paragraphs
const aboutText = [
  "I'm a dedicated third-year IT student...",  // Your story
  "My journey in technology began..."          // Your background
];

// Line 14-35: Highlight items
const highlights = [
  {
    icon: "🎓",
    title: "Academic Excellence",              // Your achievements
    description: "Maintaining high GPA..."     // Description
  },
  // Add more highlights...
];

// Line 37-44: Metrics
const metrics = [
  { value: "45+", label: "Courses Completed" },  // Your metrics
  { value: "3.8", label: "Current GPA" },
  { value: "15+", label: "Projects Built" },
  { value: "2", label: "Years Experience" }
];
```

### 3. Skills Section (`src/components/Skills/Skills.js`)

**What to change:**
- Technical skills and proficiency levels
- Certifications and achievements
- Academic coursework

**Key variables to modify:**
```javascript
// Line 5-35: Technical skills
const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 85, proficiency: "Advanced", color: "#3776ab" },
      // Add/modify your skills, change proficiency levels
    ]
  },
  // Add more categories...
];

// Line 37-65: Certifications
const certifications = [
  {
    name: "Oracle Java SE 11 Developer",      // Your certifications
    issuer: "Oracle",                         // Issuing organization
    year: "2024",                            // Year obtained
    level: "Professional"                     // Certification level
  },
  // Add your certifications...
];

// Line 67-75: Academic skills
const academicSkills = [
  { 
    name: "Data Structures & Algorithms", 
    level: 85, 
    proficiency: "Advanced",                  // Change proficiency
    description: "Advanced coursework completed"  // Your description
  },
  // Add your academic subjects...
];
```

### 4. Experience Section (`src/components/Experience/Experience.js`)

**What to change:**
- Work experience or project experience
- Job titles and companies
- Achievements and responsibilities
- Technologies used

**Key variables to modify:**
```javascript
// Line 5-45: Experience items
const experiences = [
  {
    title: "Software Development Intern",      // Your role
    company: "Tech Solutions Inc.",            // Company/organization
    type: "Internship",                       // Type of experience
    period: "Jun 2024 - Aug 2024",           // Duration
    location: "Remote",                       // Location
    description: "Developed web applications...",  // What you did
    achievements: [
      "Built responsive web applications",     // Your achievements
      "Collaborated with senior developers",
      // Add more achievements...
    ],
    technologies: ["React", "Node.js", "MongoDB"]  // Technologies used
  },
  // Add more experiences...
];
```

### 5. Projects Section (`src/components/Projects/Projects.js`)

**What to change:**
- Project titles and descriptions
- Technologies used
- Project links (GitHub, live demo)
- Project metrics

**Key variables to modify:**
```javascript
// Line 7-55: Projects array
const projects = [
  {
    title: "E-Commerce Platform",              // Project name
    description: "Full-stack web application...",  // Project description
    image: "/api/placeholder/400/250",        // Project image
    technologies: ["React", "Node.js", "MongoDB"],  // Tech stack
    metrics: {
      lines: "2.5K",                         // Code metrics
      commits: "45",
      duration: "3 months"
    },
    links: {
      github: "https://github.com/yourusername/project",  // GitHub link
      live: "https://yourproject.com"                     // Live demo
    },
    featured: true,                          // Mark as featured
    category: "web"                          // Project category
  },
  // Add more projects...
];

// Line 57-62: Filter categories
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },    // Add your categories
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'desktop', label: 'Desktop Apps' }
];
```

### 6. Contact Section (`src/components/Contact/Contact.js`)

**What to change:**
- Contact information
- Contact methods
- Availability status
- Contact form fields

**Key variables to modify:**
```javascript
// Line 6-20: Contact methods
const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "sarah.johnson@email.com",         // Your email
    link: "mailto:sarah.johnson@email.com"
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+1 (555) 123-4567",             // Your phone
    link: "tel:+15551234567"
  },
  // Add more contact methods...
];

// Line 22-26: Availability status
const availability = {
  status: "Available",                       // Your availability
  message: "Open to internship opportunities and project collaborations"
};
```

### 7. Footer Section (`src/components/Footer/Footer.js`)

**What to change:**
- Footer description
- Quick links
- Contact information
- Social media links

**Key variables to modify:**
```javascript
// Line 6-8: Footer description
const footerDescription = "3rd year IT student passionate about technology...";  // Your description

// Line 10-18: Quick links
const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },       // Modify navigation links
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

// Line 20-28: Resources (optional)
const resources = [
  { name: "Resume", href: "/resume.pdf" },   // Add your resume link
  { name: "Portfolio", href: "#projects" },
  // Add more resources...
];
```

## 🎨 Styling Customization

### Colors and Theme
Edit `src/index.css` to change the color scheme:

```css
:root {
  --accent-primary: #1d4ed8;     /* Primary accent color */
  --accent-secondary: #7c3aed;   /* Secondary accent color */
  --text-primary: #0f172a;       /* Main text color */
  /* Modify other color variables... */
}
```

### Fonts
Change fonts in `src/index.css`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  /* Change to your preferred font */
}
```

## 📝 Content Writing Tips

### 1. Hero Section
- Keep the name and title clear and professional
- Use action-oriented typing texts
- Write a compelling 2-3 sentence description
- Update statistics to reflect your actual achievements

### 2. About Section
- Tell your story in 2-3 paragraphs
- Focus on your passion for technology
- Highlight unique experiences or perspectives
- Keep it personal but professional

### 3. Skills Section
- Be honest about proficiency levels
- Group skills logically by category
- Include both technical and soft skills
- Add certifications as you earn them

### 4. Experience Section
- Include internships, part-time jobs, and significant projects
- Use action verbs (developed, implemented, collaborated)
- Quantify achievements where possible
- List relevant technologies used

### 5. Projects Section
- Showcase your best work
- Include a mix of personal and academic projects
- Provide clear descriptions of what the project does
- Always include GitHub links

### 6. Contact Section
- Use professional email address
- Include multiple contact methods
- Set realistic availability expectations
- Keep contact form simple

## 🚀 Deployment Tips

1. **Update package.json**: Change the name and description
2. **Add your domain**: Update homepage URL if deploying to custom domain
3. **Environment variables**: Store sensitive data in .env files
4. **Build optimization**: Run `npm run build` before deployment

## 🔧 Advanced Customization

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.js`
3. Add navigation link in `src/components/Navbar/Navbar.js`

### Modifying Animations
- Edit CSS files in each component folder
- Modify animation durations and effects
- Add new animations using CSS keyframes

### Adding New Features
- Contact form backend integration
- Blog section
- Testimonials section
- Resume download functionality

## 📞 Need Help?

If you need assistance with customization:
1. Check the component files for inline comments
2. Refer to React documentation for component patterns
3. Test changes locally before deploying
4. Keep backups of your original content

Remember to test your changes in both light and dark modes to ensure everything looks good!
# Mohammed Fawaz Mulla - Portfolio

A modern, responsive portfolio website built with Next.js 16, featuring dark/light mode toggle, smooth animations, and optimized performance.

🌐 **Live Demo:** [https://fawazmulla.github.io/Portfolio](https://fawazmulla.github.io/Portfolio)

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.1 (with Turbopack)
- **Frontend:** React 18, CSS3
- **Styling:** Custom CSS with CSS Variables for theming
- **Email Service:** EmailJS for contact form
- **Testing:** Playwright for E2E testing
- **Deployment:** GitHub Pages with automated CI/CD
- **Build Tool:** Turbopack (Next.js 16 default)

## ✨ Features

- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive Design** - Optimized for all devices and screen sizes
- 📧 **Working Contact Form** - Integrated with EmailJS for real email delivery
- 🎨 **Smooth Animations** - CSS transitions and hover effects
- ⚡ **Performance Optimized** - Static site generation with Next.js
- 🔍 **SEO Friendly** - Meta tags, sitemap, and structured data
- 📊 **PWA Ready** - Web app manifest and service worker support
- 🎯 **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Development

### Prerequisites
- Node.js 18.20.8 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/FawazMulla/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Build for production
npm run start        # Start production server

# Deployment
npm run export       # Export static files
npm run deploy       # Deploy to GitHub Pages

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically

# Testing
npm run test:e2e     # Run Playwright E2E tests
npm run test:e2e:ui  # Run E2E tests with UI

# Analysis
npm run analyze      # Analyze bundle size
npm run validate     # Run linting and build
```

## 📁 Project Structure

```
Portfolio/
├── components/           # React components
│   ├── About/           # About section
│   ├── Contact/         # Contact form
│   ├── Experience/      # Work experience
│   ├── Footer/          # Footer component
│   ├── Hero/            # Hero/landing section
│   ├── Navbar/          # Navigation bar
│   ├── Projects/        # Projects showcase
│   └── Skills/          # Skills section
├── contexts/            # React contexts
│   └── ThemeContext.js  # Theme management
├── pages/               # Next.js pages
│   ├── api/            # API routes (if any)
│   ├── _app.js         # App wrapper
│   ├── _document.js    # HTML document
│   └── index.js        # Home page
├── public/              # Static assets
│   ├── images/         # Image assets
│   ├── manifest.json   # PWA manifest
│   └── *.png          # Favicon files
├── styles/              # Global styles
└── utils/              # Utility functions
```

## 🎨 Customization

### Personal Information
Update your details in these components:
- `components/Hero/Hero.js` - Name, title, and introduction
- `components/About/About.js` - About section and achievements
- `components/Experience/Experience.js` - Work history and education
- `components/Skills/Skills.js` - Technical skills and certifications
- `components/Projects/Projects.js` - Project showcase
- `components/Contact/Contact.js` - Contact information

### Styling
- `styles/themes.css` - CSS variables for colors and themes
- Component-specific CSS files for individual styling
- Responsive breakpoints defined in each component's CSS

### Email Configuration
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Add your credentials to `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Deployment

### GitHub Pages (Automated)
The project is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io/Portfolio`

### Manual Deployment
```bash
npm run deploy
```

## 🧪 Testing

### E2E Testing with Playwright
```bash
# Run tests headlessly
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui
```

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Bundle Size:** Optimized with Next.js automatic code splitting
- **Images:** Optimized with Next.js Image component

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

⭐ **Star this repository if you found it helpful!**
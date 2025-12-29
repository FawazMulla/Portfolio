import { ThemeProvider } from '../src/contexts/ThemeContext';
import '../styles/globals.css';
import '../components/Navbar/Navbar.css';
import '../components/Hero/Hero.css';
import '../components/About/About.css';
import '../components/Achievements/Achievements.css';
import '../components/Experience/Experience.css';
import '../components/Skills/Skills.css';
import '../components/Projects/Projects.css';
import '../components/Contact/Contact.css';
import '../components/Footer/Footer.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Report web vitals for performance monitoring
export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === 'production') {
    // Log performance metrics in production
    console.log(metric);
    
    // You can send metrics to analytics service here
    // Example: analytics.track(metric.name, metric.value);
  }
}
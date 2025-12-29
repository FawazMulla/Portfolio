import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Achievements from '../components/Achievements/Achievements';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const siteUrl = 'https://fawazmulla.github.io/Portfolio';
  const title = 'Mohammed Fawaz Mulla - Full Stack Developer & IT Student';
  const description = 'Full Stack Developer and IT Student specializing in React, Node.js, and modern web technologies. View my projects, skills, and experience in software development.';
  const keywords = 'Mohammed Fawaz Mulla, Full Stack Developer, React Developer, Node.js, JavaScript, Web Development, IT Student, Portfolio, Software Engineer';

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Mohammed Fawaz Mulla" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/images/profile-photo1.jpg`} />
        <meta property="og:image:alt" content="Mohammed Fawaz Mulla - Full Stack Developer" />
        <meta property="og:site_name" content="Mohammed Fawaz Mulla Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}/images/profile-photo1.jpg`} />
        <meta property="twitter:image:alt" content="Mohammed Fawaz Mulla - Full Stack Developer" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohammed Fawaz Mulla",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer and IT Student specializing in React, Node.js, and modern web technologies",
              "url": siteUrl,
              "image": `${siteUrl}/images/profile-photo1.jpg`,
              "sameAs": [
                "https://github.com/fawazmulla",
                "https://linkedin.com/in/mohammed-fawaz-mulla"
              ],
              "knowsAbout": [
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "Full Stack Development",
                "Web Development",
                "Software Engineering"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "M.H Saboo Siddik College of Engineering"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Mumbai, Maharashtra, India"
                }
              }
            })
          }}
        />

        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mohammed Fawaz Mulla Portfolio",
              "description": description,
              "url": siteUrl,
              "author": {
                "@type": "Person",
                "name": "Mohammed Fawaz Mulla"
              },
              "inLanguage": "en-US"
            })
          }}
        />
      </Head>

      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
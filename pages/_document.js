import { Html, Head, Main, NextScript } from 'next/document';

// Get basePath for production
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//cdn.emailjs.com" />
        
        {/* Security headers - Note: X-Frame-Options should be set by server, not meta tag */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        
        {/* Favicons */}
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="48x48" href={`${basePath}/favicon-48x48.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`${basePath}/favicon-192.png`} />
        <link rel="icon" type="image/png" sizes="512x512" href={`${basePath}/favicon-512x512.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        
        {/* Manifest for PWA capabilities */}
        <link rel="manifest" href={`${basePath}/manifest.json`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
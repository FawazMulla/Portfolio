/**
 * Utility function to handle asset paths with basePath for GitHub Pages
 */

// Get the base path from Next.js config
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

/**
 * Get the correct asset path for images and other static assets
 * @param {string} path - The asset path (e.g., '/images/photo.jpg')
 * @returns {string} - The correct path with basePath if needed
 */
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the basePath
  if (process.env.NODE_ENV === 'production') {
    return `${basePath}/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
}

/**
 * Get the base path for the application
 * @returns {string} - The base path
 */
export function getBasePath() {
  return basePath;
}
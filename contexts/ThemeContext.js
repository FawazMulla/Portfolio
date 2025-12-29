import { createContext, useContext, useEffect, useState } from 'react';

// Create the Theme Context with a default value
const ThemeContext = createContext({
  theme: 'light',
  isDark: false,
  isLight: true,
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false
});

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme);
      } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
        }
      }
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
    }
    
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      try {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.className = theme;
        localStorage.setItem('portfolio-theme', theme);
      } catch (error) {
        console.warn('Error applying theme:', error);
      }
    }
  }, [theme, mounted]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Set specific theme
  const setSpecificTheme = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setTheme(newTheme);
    }
  };

  // Get current theme info
  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  const value = {
    theme,
    isDark,
    isLight,
    toggleTheme,
    setTheme: setSpecificTheme,
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Safe localStorage access after component mounts
    let savedTheme = 'dark';
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        savedTheme = localStorage.getItem('theme') || 'dark';
      } catch (error) {
        console.warn('localStorage not available:', error);
        savedTheme = 'dark';
      }
    }
    setTheme(savedTheme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (!mounted) return; // Prevent theme toggle before hydration
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Safe localStorage and document access
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('theme', newTheme);
      } catch (error) {
        console.warn('localStorage not available:', error);
      }
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
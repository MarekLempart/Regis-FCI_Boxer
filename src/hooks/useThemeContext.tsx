// src/hooks/useThemeContext.tsx

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

export default useThemeContext;


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme, lightTheme } from '../styles/theme';

// type ThemeContextType = {
//   theme: 'light' | 'dark';
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<'light' | 'dark'>(
//     () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
//   );

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   useEffect(() => {
//     document.body.dataset.theme = theme;
//   }, [theme]);

//   const currentTheme = theme === 'light' ? lightTheme : darkTheme;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useThemeContext must be used within a ThemeContextProvider');
//   }
//   return context;
// };



// type ThemeContextType = {
//   themeName: 'light' | 'dark';
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useThemeContext = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useThemeContext must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
//     const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
//     return storedTheme || 'dark';
//   });

//   const toggleTheme = () => {
//     const newTheme = themeName === 'dark' ? 'light' : 'dark';
//     setThemeName(newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const theme = useMemo(() => (themeName === 'dark' ? darkTheme : lightTheme), [themeName]);

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, themeName }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

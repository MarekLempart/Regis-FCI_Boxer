// src/components/ThemeSwitcher.tsx

import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useThemeContext from '../hooks/useThemeContext';
// import { useThemeSwitcher } from '../hooks/useThemeSwitcher';
import { SwitcherButton } from './ThemeSwitcherStyles';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  // const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <SwitcherButton onClick={toggleTheme} aria-label="Switch theme">
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </SwitcherButton>
  );
};

export default ThemeSwitcher;

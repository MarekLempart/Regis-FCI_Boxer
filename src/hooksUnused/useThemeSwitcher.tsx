// src/hooks/useThemeSwitcher.tsx // remove it

import { useState, useEffect } from "react";

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return { theme, toggleTheme };
};

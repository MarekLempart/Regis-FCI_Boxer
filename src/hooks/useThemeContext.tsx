// src/hooks/useThemeContext.tsx
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

export default useThemeContext;

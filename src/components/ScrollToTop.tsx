// src/components/ScrollToTop.tsx // remove it

// ScrollToTop doesnt work on mobile. Checked on iPhone 15 Pro on Safari Browser

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Ustawia przewinięcie na górę
  }, [pathname]);

  return null; // Komponent nie renderuje niczego
};

export default ScrollToTop;

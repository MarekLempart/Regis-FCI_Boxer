// src/components/ScrollToTop.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Ustawia przewinięcie na górę
  }, [pathname]);

  return null; // Komponent nie renderuje niczego
};

export default ScrollToTop;

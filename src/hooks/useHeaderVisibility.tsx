// src/hooks/useHeaderVisibility.tsx // remove it

import { useState, useEffect } from "react";

// Hook do obsługi widoczności nagłówka.
// Nagłówek staje się niewidoczny, gdy użytkownik przewija w dół,
// a widoczny, gdy przewija w górę.

export const useHeaderVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Ukryj nagłówek
      } else {
        setIsVisible(true); // Pokaż nagłówek
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
};

// src/hooks/useHeaderVisibility.tsx
import { useState, useEffect, useRef } from "react";

const SCROLL_DELTA = 5;

export const useHeaderVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // const currentScrollY = window.scrollY;

      // if (currentScrollY > lastScrollY) {
      //   setIsVisible(false);
      // } else {
      //   setIsVisible(true);
      // }

      // setLastScrollY(currentScrollY);
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_DELTA) {
        return;
      }

      if (currentScrollY < 10 || currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
};

// src/components/HeroSlideshow.tsx // remove it

import { useState, useEffect } from "react";
import imageRegisHero from "../data/imageDataHero";
import {
  SlideshowContainer,
  StyledImage,
  TextOverlay,
  HeroText,
} from "../styles/HeroSlideshowStyles";
import { TypeAnimation } from "react-type-animation";

const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenSize("mobile");
    } else if (width < 1200) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  const nextSlide = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageRegisHero.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Aktualizujemy przy pierwszym renderze
    const interval = setInterval(nextSlide, 5000);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      clearInterval(interval);
    };
  }, []);

  const currentImage =
    screenSize === "mobile"
      ? imageRegisHero[currentImageIndex].srcMobile
      : screenSize === "tablet"
      ? imageRegisHero[currentImageIndex].srcTablet
      : imageRegisHero[currentImageIndex].srcDesktop;

  return (
    <SlideshowContainer>
      <StyledImage
        src={currentImage}
        alt={imageRegisHero[currentImageIndex].id}
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: isAnimating ? "blur(30px)" : "blur(0px)" }}
        transition={{ duration: 1 }}
        onAnimationComplete={isAnimating ? handleAnimationComplete : undefined}
      />
      <TextOverlay>
        <HeroText
          initial={{ opacity: 0, y: 10 }} // Startuje poniżej z zerową widocznością
          animate={{ opacity: 1, y: 0 }} // Pojawia się z przesunięciem
          transition={{ duration: 1, delay: 0.5 }} // Płynna animacja z opóźnieniem
        >
          <TypeAnimation
            sequence={[
              "Nazywam się Ramones z Gangu Nieustraszonych,",
              1000,
              "ale wszyscy nazywają mnie Regis.",
              1000,
              "Jeśli chcesz mnie poznać, to oglądaj dalej...",
              3000,
            ]}
            speed={50}
            wrapper="span"
            repeat={5}
            cursor={false}
          />
        </HeroText>
      </TextOverlay>
    </SlideshowContainer>
  );
};

export default HeroSlideshow;

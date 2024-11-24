// src/components/HeroSlideshow.tsx

import { useState, useEffect } from "react";
import imageRegisHero from "../data/imageDataHero";
import { SlideshowContainer, StyledImage } from "../styles/HeroSlideshowStyles";

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
        </SlideshowContainer>
    );
};

export default HeroSlideshow;

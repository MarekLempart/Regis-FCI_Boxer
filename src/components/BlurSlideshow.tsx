// src/components/BlurSlideshow.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import css from "../styles/BlurSlideshow.module.css";
import imageRegisHero from "../data/imageData";

const BlurSlideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
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
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={css.slideshowContainer}>
      <motion.img
        src={imageRegisHero[currentImageIndex].src}
        alt={imageRegisHero[currentImageIndex].id}
        className={css.image}
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: isAnimating ? "blur(30px)" : "blur(0px)" }} // Rozmycie animacji
        transition={{ duration: 1 }}
        onAnimationComplete={isAnimating ? handleAnimationComplete : undefined} // Zmiana obrazu tylko po animacji
      />
    </div>
    );
};

export default BlurSlideshow;
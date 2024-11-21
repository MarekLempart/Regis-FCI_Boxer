// src/components/ImagesRegisPosition.tsx

import { useState, useEffect } from "react";
import imageRegisPosition from "../data/imageDateSection01";
import { PositionImageContainer, SlideshowPositionContainer, StyledImage } from "../styles/ImageSlideshow";

const PositionSlideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const nextSlide = () => {
        setIsAnimating(true);
    };

    const handleAnimationComplete = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === imageRegisPosition.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(false);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <PositionImageContainer>
            <SlideshowPositionContainer>
                <StyledImage
                src={imageRegisPosition[currentImageIndex].src}
                alt={imageRegisPosition[currentImageIndex].id}                
                initial={{ filter: "blur(0px)" }}
                animate={{ filter: isAnimating ? "blur(20px)" : "blur(0px)" }} // Rozmycie animacji
                transition={{ duration: 1 }}
                onAnimationComplete={isAnimating ? handleAnimationComplete : undefined} // Zmiana obrazu tylko po animacji
                />
            </SlideshowPositionContainer>
        </PositionImageContainer>
        
    );
};

export default PositionSlideshow;
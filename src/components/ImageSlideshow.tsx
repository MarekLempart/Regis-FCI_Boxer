// src/components/ImageSlideshow

import { useState, useEffect } from "react";
import { PositionImageContainer, SlideshowPositionContainer, StyledImage } from "../styles/PositionSlideshowStyles";

interface ImageItem {
  id: string;
  src: string;
}

interface ImageSlideshowProps {
  images: ImageItem[];
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].id}
          initial={{ filter: "blur(0px)" }}
          animate={{ filter: isAnimating ? "blur(20px)" : "blur(0px)" }}
          transition={{ duration: 1 }}
          onAnimationComplete={isAnimating ? handleAnimationComplete : undefined}
        />
      </SlideshowPositionContainer>
    </PositionImageContainer>
  );
};

export default ImageSlideshow;

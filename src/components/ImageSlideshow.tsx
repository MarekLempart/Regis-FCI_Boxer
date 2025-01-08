// src/components/ImageSlideshow.tsx // remove it

import { useState, useEffect } from "react";
import {
  PositionImageContainer,
  SlideshowPositionContainer,
  StyledImage,
} from "../styles/ImageSlideshowStyles";

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
  const [isHovered, setIsHovered] = useState(false);

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
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PositionImageContainer>
      <SlideshowPositionContainer>
        <StyledImage
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].id}
          initial={{ filter: "blur(0px)" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            filter: isAnimating ? "blur(2px)" : "blur(0px)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={
            isAnimating ? handleAnimationComplete : undefined
          }
        />
      </SlideshowPositionContainer>
    </PositionImageContainer>
  );
};

export default ImageSlideshow;

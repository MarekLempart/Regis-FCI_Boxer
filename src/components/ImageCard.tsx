// src/components/ImageCard.tsx

import { useState } from "react";
import { ImageCardContainer, StyledImageCard } from "../styles/ImageCardStyles";

interface ImageCardProps {
  image: {
    id: string;
    src: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ImageCardContainer>
      <StyledImageCard
        src={image.src}
        alt={image.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.02 : 1, // Powiększenie o 2% na hover
          boxShadow: isHovered
            ? "0px 10px 20px rgba(255, 165, 0, 0.8)" // Mocniejszy cień na hover
            : "0px 5px 15px rgba(255, 165, 0, 0.5)", // Standardowy cień
        }}
        transition={{ duration: 0.3 }}
      />
    </ImageCardContainer>
  );
};

export default ImageCard;

// src/components/ImageCard.tsx // remove it

import { useState } from "react";
import {
  PositionImageContainer,
  ImageCardContainer,
  StyledImageCard,
} from "../styles/ImageCardStyles";

interface ImageCardProps {
  image: {
    id: string;
    src: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <PositionImageContainer>
      <ImageCardContainer>
        <StyledImageCard
          src={image.src}
          alt={image.id}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            scale: isHovered ? 1.05 : 1, // Powiększenie o 5% na hover
            // boxShadow: isHovered // remove it
            //   ? "5px 10px 20px rgba(255, 165, 0, 0.8)"
            //   : "5px 10px 20px rgba(255, 165, 0, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        />
      </ImageCardContainer>
    </PositionImageContainer>
  );
};

export default ImageCard;

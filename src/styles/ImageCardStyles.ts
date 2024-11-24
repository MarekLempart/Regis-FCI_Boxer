// src/styles/ImageCardStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

// Kontener wokół obrazu
export const ImageCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 30px;
  border-radius: 10px;
`;

// Obraz z animowanym cieniem
export const StyledImageCard = styled(motion.img)`
  width: 600px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.2);; // Pomarańczowy cień
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

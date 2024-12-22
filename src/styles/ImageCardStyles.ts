// src/styles/ImageCardStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const PositionImageContainer = styled.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 0px 10px;
  width: 100%; /* Domyślnie 100% szerokości ekranu */
  max-width: 1400px; /* Maksymalna szerokość */
  aspect-ratio: 3 / 2; /* Zachowanie proporcji 3:2 */
`;

// Kontener wokół obrazu
export const ImageCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  
  /* width: 780px;
  height: 520px; */

  /* width: 100%;
  max-width: 740px;
  aspect-ratio: 3 / 2; */

  overflow: hidden;
  margin: 0px auto; 
  border-radius: 10px;
  background: #000;
  box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.5);
  /* transition: transform 0.3s ease-in-out; */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%; /* Na tablet i desktop dwie kolumny */
  }
`;

// Obraz z animowanym cieniem
export const StyledImageCard = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  /* box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.2); // Pomarańczowy cień
  transition: transform 0.3s ease-in-out; */

  /* &:hover {
    cursor: pointer;
  } */
`;

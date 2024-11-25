// src/styles/PositionSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const PositionImageContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 20px 30px;
`;

// Styled-component dla kontenera pokazu slajdów
export const SlideshowPositionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 780px;
    height: 520px;
    overflow: hidden;
    margin: 10px auto;
    border-radius: 10px;
    background: #000;
    box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.4);
    
`;

// Styled-component dla obrazu w pokazie slajdów
export const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

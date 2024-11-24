// src/styles/PositionSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const PositionImageContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    /* background-color: ; */
    /* color: ; */
    padding: 30px 20px 30px;
`;

// Styled-component dla kontenera pokazu slajdów
export const SlideshowPositionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 600px;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    background: #000;
    box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.2);
    margin: 20px auto;
`;

// Styled-component dla obrazu w pokazie slajdów
export const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

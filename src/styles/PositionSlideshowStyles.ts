// src/styles/PositionSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const PositionImageContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    /* background-color: ; */
    /* color: ; */
    padding: 25px 20px 25px;
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
    border-radius: 20px;
    background: #000;
    margin: 20px auto;
`;

// Styled-component dla obrazu w pokazie slajdów
export const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`;

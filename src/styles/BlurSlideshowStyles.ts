// src/styles/BlurSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

// Styled-component dla kontenera pokazu slajdów
export const SlideshowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1200px;
    height: 800px;
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

// src/styles/HeroSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const SlideshowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1600px;
    height: 1000px;
    overflow: hidden;
    border-radius: 10px;
    background: #000;
    margin: 0px auto;

    @media (max-width: 768px) {
        max-width: 95%;
        height: 600px; /* Mobile wysokość */
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        max-width: 95%;
        height: 800px; /* Tablet wysokość */
    }

    @media (min-width: 1200px) {
        max-width: 1600px;
        height: 1000px; /* Desktop wysokość */
    }
`;

export const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

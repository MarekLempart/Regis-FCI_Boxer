// src/styles/HeroSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const SlideshowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    background: #000;
    margin: 40px auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 600px; /* Mobile wysokość */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 800px; /* Tablet wysokość */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        height: 1000px; /* Desktop wysokość */
    }
`;

export const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

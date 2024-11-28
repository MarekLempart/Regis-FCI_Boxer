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

export const HeroText = styled(motion.h3)`
    position: absolute;
    font-family: "Caveat", cursive;
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.5);
    color: ${({ theme }) => theme.colors.bgDarkRift};
    padding: 5px 25px;
    border-radius: 5px;
    text-align: center;
    line-height: 1.5;

    /* Pozycjonowanie dla mobile */
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    /* Pozycjonowanie dla tablet i desktop */
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.0rem;
        top:unset;
        bottom: 10px;
        left: unset;
        right: 20px;
        transform: none;        
        text-align: right;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 3.5rem; /* Desktop: największa czcionka */
    }
`;

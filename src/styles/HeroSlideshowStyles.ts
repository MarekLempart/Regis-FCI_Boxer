// src/styles/HeroSlideshowStyles.ts

import styled from "styled-components";
import { motion } from "framer-motion";

export const SlideshowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    background: #000;
    margin: 90px auto 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 600px; /* Mobile wysokość */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 700px; /* Tablet wysokość */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        height: 800px; /* Desktop wysokość */
    }
`;

export const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

export const TextOverlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%; /* Cała szerokość obrazu */
    background-color: rgba(0, 0, 0, 0.6); /* Półprzezroczysty pasek */
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroText = styled(motion.h3)`
    font-family: "Caveat", cursive;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.textWhite};
    text-align: center;
    line-height: 1.5;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 42px; /* Tablet: większa czcionka */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 48px; /* Desktop: największa czcionka */
    }
`;

// export const HeroText = styled(motion.h3)`
//     position: absolute;
//     font-family: "Caveat", cursive;
//     font-size: 1.2rem;
//     background-color: rgba(0, 0, 0, 0.6);
//     color: ${({ theme }) => theme.colors.textWhite};
//     padding: 5px 25px;
//     border-radius: 5px;
//     text-align: center;
//     line-height: 1.5;
//     top: 80%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;

//     @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
//         font-size: 2.0rem;
//         top:unset;
//         bottom: 10px;
//         left: unset;
//         right: 20px;
//         transform: none;        
//         text-align: right;
//     }

//     @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
//         font-size: 3.5rem; /* Desktop: największa czcionka */
//     }
// `;

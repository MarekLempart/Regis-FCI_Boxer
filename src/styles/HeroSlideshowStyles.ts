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
  margin: 30px auto 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 600px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile})
    and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 700px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet})
    and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 800px;
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
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled(motion.h3)`
  font-family: "Caveat", cursive;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.colNavajoWhite};
  text-align: center;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 42px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 48px;
  }
`;

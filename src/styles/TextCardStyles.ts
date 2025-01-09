// src/styles/TextCardStyles.ts

import styled from "styled-components";

export const PositionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 0px 10px;
  width: 100%;
`;

export const TextCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 840px;
  aspect-ratio: 3 / 2;

  overflow: hidden;
  margin: 0px auto;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const StyledText = styled.div`
  font-family: "Caveat", cursive;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 90%;
  max-width: 100%;
  height: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

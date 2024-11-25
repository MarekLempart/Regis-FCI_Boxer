// src/styles/TextCardStyles.ts

import styled from "styled-components";

export const PositionTextContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 20px 30px;
`;

export const TextCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 780px;
  height: 520px;
  overflow: hidden;
  margin: 10px auto;  
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.4);
`;

export const StyledText = styled.div`
  font-family: "Caveat", cursive;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textWhite};
`;

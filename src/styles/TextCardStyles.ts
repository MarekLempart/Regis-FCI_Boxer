// src/styles/TextCardStyles.ts

import styled from "styled-components";

export const TextCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.2);
`;

export const StyledText = styled.div`
  font-family: "Caveat", cursive;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textWhite};
`;

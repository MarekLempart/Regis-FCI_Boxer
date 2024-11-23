// src/styles/TextCardStyles.ts

import styled from "styled-components";

export const TextCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 20px;
  padding: 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
`;

export const StyledText = styled.div`
  font-family: "Caveat", cursive;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  color: #333;
`;

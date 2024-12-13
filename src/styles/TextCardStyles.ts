// src/styles/TextCardStyles.ts

import styled from "styled-components";

export const PositionTextContainer = styled.div `
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
  /* width: 780px;
  height: 520px; */

  width: 100%; /* Domyślnie 100% szerokości ekranu */
  max-width: 840px; /* Maksymalna szerokość */
  aspect-ratio: 3 / 2; /* Zachowanie proporcji 3:2 */

  overflow: hidden;
  margin: 0px auto;  
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.4);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%; /* Na tablet i desktop dwie kolumny */
    background-color: transparent;
    box-shadow: none;
  }
`;

// Tekst wewnątrz karty
export const StyledText = styled.div`
  font-family: "Caveat", cursive;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textWhite};

  width: 90%; /* Dopasowanie do szerokości kontenera */
  max-width: 100%; /* Bez przepełnienia */
  height: 90%;
  overflow: hidden;

  /* Dodano centrowanie w pionie */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Zapewnia odstępy w obrębie tekstu */
  padding: 10px;
`;

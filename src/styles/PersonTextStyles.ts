// src/styles/PersonTextStyles.ts

import styled from "styled-components";

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* width: 780px;
    height: 520px; */

    width: 100%; /* Domyślnie 100% szerokości ekranu */
    max-width: 840px; /* Maksymalna szerokość */
    aspect-ratio: 2 / 3; /* Zachowanie proporcji 3:2 */

    overflow: hidden;
    margin: 0px auto;  
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.4);

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%; /* Na tablet i desktop dwie kolumny */
    }
`;

// Tekst wewnątrz karty
export const StyledText = styled.div`
    font-family: "Caveat", cursive;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    gap: 50px;
    padding: 30px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textWhite};

    width: 100%; /* Dopasowanie do szerokości kontenera */
    max-width: 100%; /* Bez przepełnienia */
    height: 90%;
    overflow: hidden;
`;

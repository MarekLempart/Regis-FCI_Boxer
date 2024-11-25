// src/styles/HomeStyles.ts

// import styled from 'styled-components';

// export const HomeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: ${({ theme }) => theme.spacing.mobilePadding};
//   margin: 0px auto;

//   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     flex-direction: row;
//     gap: 20px;
//     padding: ${({ theme }) => theme.spacing.tabletPadding};
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     padding: ${({ theme }) => theme.spacing.desktopPadding};
//   }
// `;

// export const ImageContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 10px;
//   }
// `;

// export const TextContainer = styled.div`
//   flex: 1;
//   padding: 10px;
//   text-align: left;
// `;

import styled from 'styled-components';

// Kontener główny dla strony Home
export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Domyślnie dla mobile układ kolumnowy */
  gap: 20px; /* Odstęp między komponentami */
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row; /* Na tablet i desktop zmiana na układ wierszy */
    flex-wrap: wrap; /* Pozwalamy na zawijanie komponentów */
    gap: 20px; /* Odstęp między kolumnami */
    padding: ${({ theme }) => theme.spacing.tabletPadding};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.desktopPadding};
  }
`;

// Kontener dla poszczególnych komponentów w układzie dwóch kolumn
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Zapewnia, że komponenty będą się rozciągały równomiernie */
  padding: 10px;
  width: 100%; /* Zapewnia pełną szerokość w mobile */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 48%; /* Na tabletach i desktopach, komponenty będą zajmować 48% szerokości (dla dwóch kolumn) */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 48%; /* Na desktopie ta sama szerokość jak na tablecie */
  }
`;

// Stylizacja dla obrazów w ImageSlideshow i ImageCard
export const StyledImageCard = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
`;

// Stylizacja dla TextCard - dla tekstu
export const TextCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgLimoges};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 15px 20px rgba(255, 165, 0, 0.4);
  transition: transform 0.3s ease-in-out;
  
  h3 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textWhite};
  }

  p {
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.2rem;
  }
`;




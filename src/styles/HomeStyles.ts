// src/styles/HomeStyles.ts
import styled from 'styled-components';

// Kontener główny dla strony Home
export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Domyślnie dla mobile układ kolumnowy */
  gap: 20px; /* Odstęp między komponentami */
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: 0px auto;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row; /* Na tablet i desktop zmiana na układ wierszy */
    flex-wrap: wrap; /* Pozwalamy na zawijanie komponentów */
    gap: 20px; /* Odstęp między kolumnami */
    padding: ${({ theme }) => theme.spacing.tabletPadding};
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: ${({ theme }) => theme.spacing.desktopPadding};
  }
`;

// Kontener dla par komponentów w układzie dwóch kolumn bez zmiany kolejności
export const ItemsContainerNoirOrder = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  gap: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
export const ItemsContainerReverseOrder = styled(ItemsContainerNoirOrder)`
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row-reverse; /* Odwrócona kolejność */
  }
`;

// // Kontener dla par komponentów w układzie dwóch kolumn w odwrotnej kolejności
// export const ItemsContainerReverseOrder = styled.div`  
//   display: flex;  
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0px auto;
//   gap: 20px;  

//   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     display: flex;
//     flex-direction: row-reverse;
//     justify-content: center;
//     align-items: center;
//     gap: 50px;
//   }
// `;

// Kontener dla poszczególnych komponentów w układzie dwóch kolumn
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Zapewnia, że komponenty będą się rozciągały równomiernie */
  padding: 0px;
  width: 100%; /* Zapewnia pełną szerokość w mobile */

  @media ${({ theme }) => theme.media.tablet} {
    width: 50%; /* Na tabletach i desktopach, komponenty będą zajmować 50% szerokości (dla dwóch kolumn) */
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%; /* Na desktopie ta sama szerokość jak na tablecie */
  }
`;
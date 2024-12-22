// src/styles/HomeStyles.ts
import styled from 'styled-components';

// Kontener główny dla strony Home
export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Domyślnie dla mobile układ kolumnowy */
  gap: 20px; /* Odstęp między komponentami */
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: 0px auto 20px;

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
  width: 100%;
  margin: 0px auto;
  gap: 20px;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
  }
`;

// Kontener dla par komponentów w układzie dwóch kolumn w odwrotnej kolejności
export const ItemsContainerReverseOrder = styled(ItemsContainerNoirOrder)`
  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex-direction: row-reverse; /* Odwrócona kolejność */
  }
`;

// Kontener dla poszczególnych komponentów w układzie dwóch kolumn
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Zapewnia, że komponenty będą się rozciągały równomiernie */
  padding: 0px;
  width: 100%; /* Zapewnia pełną szerokość w mobile */

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    width: 50%; /* Na tabletach i desktopach, komponenty będą zajmować 50% szerokości (dla dwóch kolumn) */
  }
`;
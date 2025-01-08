// src/styles/HomeStyles.ts // remove it
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: 0px auto 20px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
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
    flex-direction: row-reverse;
  }
`;

// Kontener dla poszczególnych komponentów w układzie dwóch kolumn
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0px;
  width: 100%;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    width: 50%;
  }
`;

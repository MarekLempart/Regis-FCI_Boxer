// src/styles/HomeStyles.ts

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
    padding: ${({ theme }) => theme.spacing.tabletPadding};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.desktopPadding};
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
`;

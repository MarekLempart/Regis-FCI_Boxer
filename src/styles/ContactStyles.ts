// src/styles/ContactStyles.ts

import styled from "styled-components";

export const PersonCardContainer = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 90px auto 20px;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    align-items: center;
    gap: 20px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    gap: 40px;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto; /* Dopasowanie do wymiarów */
`;

export const ImageWrapper = styled.div<{ $smallImage?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */

  /* Zmniejszanie rozmiaru obrazka na tablet i desktop */
  width: ${({ $smallImage }) => ($smallImage ? "70%" : "100%")};
  max-width: ${({ $smallImage }) => ($smallImage ? "600px" : "100%")};

  @media ${({ theme }) => theme.media.tablet} {
    width: ${({ $smallImage }) => ($smallImage ? "50%" : "100%")};
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: ${({ $smallImage }) => ($smallImage ? "40%" : "100%")};
  }

  height: auto; /* Dopasowanie do wymiarów */
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    padding: ${({ theme }) => theme.spacing.tabletPadding};
    gap: 40px;
  }
`;

export const ContactContainerForm = styled.div `
  display: flex;
  flex-direction: column;
  width: auto;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex-direction: row;
  }
`;
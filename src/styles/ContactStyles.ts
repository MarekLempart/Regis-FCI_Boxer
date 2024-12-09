// src/styles/ContactStyles.ts

import styled from "styled-components";

export const PersonCardContainer = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
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

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

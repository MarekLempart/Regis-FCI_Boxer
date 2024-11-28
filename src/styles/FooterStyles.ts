// src/components/FooterStyles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.bgCrowBlack};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const LogoContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export const Logo = styled.img`
  height: 3em;
  padding: 0.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.textBrightBrown});
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.textOrange});
  }
`;

export const FooterText = styled.p`
  margin: 1em auto 0em;
  font-size: 0.75em;
  text-align: center;
  color: ${({ theme }) => theme.colors.textWhite};
  margin-top: 0.5em;
`;

export const FooterTitle = styled.h4`
  font-family: 'Oswald', sans-serif;
  margin: 0em auto 1em;
  color: ${({ theme }) => theme.colors.textWhite};
`;

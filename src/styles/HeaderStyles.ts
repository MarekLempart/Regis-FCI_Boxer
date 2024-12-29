// src/styles/HeaderStyles.ts

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-bottom: 5px solid ${({ theme }) => theme.colors.textOrange};
  box-shadow: 0px 15px 20px 5px rgba(255, 165, 0, 0.5);
  /* box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.bgCrowBlack}, 
              0 6px 0 0 ${({ theme }) => theme.colors.textOrange}; */

  position: fixed; /* Utrzymujemy header na górze */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

   /* Dodajemy ograniczenie szerokości */
   max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto; /* Wyśrodkowanie */
  width: 100%; /* Pełna szerokość w granicach max-width */

  /* Animacje */
  transform: translateY(0); /* Domyślnie widoczny */
  transition: transform 0.3s ease-in-out; /* Płynne przesuwanie */

  &.hidden {
    transform: translateY(-100%); /* Ukryty poza widokiem */
  }

  &.visible {
    transform: translateY(0); /* Widoczny na ekranie */
  }
  &.menu-open {
    display: none; /* Ukryj header, gdy menu jest otwarte */
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-bottom: 10px solid ${({ theme }) => theme.colors.textOrange};
  }

`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LogoName = styled.h3`
  font-size: 24px;
  margin: 30px 5px;
  color: ${({ theme }) => theme.colors.accent};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 30px;
    margin: 10px 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 52px;
    margin: 10px 20px;
  }
`

export const StyledImage = styled.img`
  display: block;
  width: 55px;
  height: 55px;
  background-color: transparent; /* Wymuszenie przezroczystości */
  margin: 15px 0px 0px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 60px;
    height: 60px;
    margin: 0px 5px 0px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 100px;
    height: 100px;
    margin: 0px 10px 10px;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const StyledNavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-size: 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.textOrange};
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

  /* Aktywna zakładka */
  &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
      fill: ${({ theme }) => theme.colors.textPrimary};
      width: 28px;
      height: 28px;
    }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }  
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 998;
`;

export const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  /* width: 50%; */
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary}; /* bgDarkNavy */
  z-index: 999;
  padding: 24px 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: flex-start;

  & > button {
    align-self: flex-end; /* Align close button to the right */
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const MobileNavLink = styled(StyledNavLink)`
  align-self: flex-start; /* Align links to the left */
  margin-left: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  /* Aktywna zakładka */
  &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto; /* Push icons to the bottom in mobile */

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 24px;
    transition: color 250ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0;
    gap: 24px;
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  margin: 5px auto 0px 0px;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 30px;
    margin: 10px auto 10px 10px;
  }
`;

export const MobileIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none; /* Ukryj w wersji tablet/desktop */
  }
`;

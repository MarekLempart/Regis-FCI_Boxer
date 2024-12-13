// src/styles/HeaderStyles.ts

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.bgCrowBlack};
  border-bottom: 3px solid ${({ theme }) => theme.colors.textOrange};

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
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textWhite};
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
  color: ${({ theme }) => theme.colors.textWhite};
  text-decoration: none;
  font-size: 1rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textOrange};
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
    color: ${({ theme }) => theme.colors.textOrange};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textWhite};
    width: 28px;
    height: 28px;
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
  background-color: ${({ theme }) => theme.colors.bgDarkNavy};; /* bgDarkNavy */
  z-index: 999;
  padding: 24px 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  & > button {
    align-self: flex-end; /* Align close button to the right */
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textWhite};

    &:hover {
      color: ${({ theme }) => theme.colors.textOrange};
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textWhite};
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.textOrange};
  }

  /* Aktywna zakładka */
  &.active {
    color: ${({ theme }) => theme.colors.textOrange};

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
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.5rem;
    transition: color 250ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.textOrange};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0;
    gap: 24px;
  }
`;

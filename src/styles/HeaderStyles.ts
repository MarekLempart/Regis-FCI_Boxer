// src/styles/HeaderStyles.ts
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 5px solid ${({ theme }) => theme.colors.distinction};
  box-shadow: 0px 15px 20px 5px rgba(255, 165, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  width: 100%;

  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }

  &.visible {
    transform: translateY(0);
  }
  &.menu-open {
    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-bottom: 10px solid ${({ theme }) => theme.colors.distinction};
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LogoName = styled.h3`
  font-size: 24px;
  margin: 30px 5px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 30px;
    margin: 10px 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 52px;
    margin: 10px 20px;
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 55px;
  height: 55px;
  background-color: transparent;
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
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.distinction};
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

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
    fill: ${({ theme }) => theme.colors.textSecondary};
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  z-index: 999;
  padding: 24px 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: flex-start;

  & > button {
    align-self: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};

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
  align-self: flex-start;
  margin-left: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

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
  margin-top: auto;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
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
  color: ${({ theme }) => theme.colors.textSecondary};
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
    display: none;
  }
`;

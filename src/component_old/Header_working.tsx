// src/components/Header.tsx

import React, { useMemo, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaDog, FaHome, FaAward, FaSun, FaMoon } from 'react-icons/fa';
import { MdPets, MdContactPhone } from 'react-icons/md';
import { useHeaderVisibility } from '../hooks/useHeaderVisibility';
import { useThemeContext } from '../hooks/useThemeContext';
import {
  HeaderWrapper,
  Logo,
  Nav,
  StyledNavLink,
  MobileMenuIcon,
  MobileNav,
  MobileNavLink,
  SocialMediaWrapper,
  Overlay,
  ThemeToggleButton,
} from '../styles/HeaderStyles';

const Header: React.FC<{ isMenuOpen: boolean; toggleMenu: () => void }> = ({ isMenuOpen, toggleMenu }) => {
  const { toggleTheme, themeName } = useThemeContext();
  const isHeaderVisible = useHeaderVisibility();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
      toggleMenu();
    }
    event.stopPropagation();
  };

  return (
    <>
      <HeaderWrapper className={`${isHeaderVisible ? 'visible' : 'hidden'} ${isMenuOpen ? 'menu-open' : ''}`}>
        <Logo>
          <MdPets /> Logo <FaDog />
        </Logo>
        <Nav>
          <StyledNavLink as={NavLink} to="/" onClick={() => toggleMenu()}>
            <FaHome /> Home
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/achievements" onClick={() => toggleMenu()}>
            <FaAward /> Osiągnięcia
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/contact" onClick={() => toggleMenu()}>
            <MdContactPhone /> Kontakt
          </StyledNavLink>
          <SocialMediaWrapper>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialMediaWrapper>
          <ThemeToggleButton onClick={toggleTheme}>
            {themeName === 'dark' ? <FaMoon /> : <FaSun />}
          </ThemeToggleButton>
        </Nav>
        <MobileMenuIcon onClick={toggleMenu}>
          <FaBars />
        </MobileMenuIcon>
      </HeaderWrapper>
      {isMenuOpen && (
        <Overlay ref={overlayRef} onClick={handleOverlayClick}>
          <MobileNav>
            <button onClick={() => toggleMenu()}>
              <FaTimes />
            </button>
            <ThemeToggleButton onClick={toggleTheme}>
              {themeName === 'dark' ? <FaMoon /> : <FaSun />}
            </ThemeToggleButton>
          </MobileNav>
        </Overlay>
      )}
    </>
  );
};

export default Header;

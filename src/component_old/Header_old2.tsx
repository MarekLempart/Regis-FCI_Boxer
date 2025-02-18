// src/components/Header.tsx

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaDog, FaHome, FaAward, FaSun, FaMoon } from 'react-icons/fa';
import { MdPets, MdContactPhone } from 'react-icons/md';
import { useHeaderVisibility } from '../hooks/useHeaderVisibility';
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

// Definicja typów propsów
interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const theme = useTheme();
  const breakpointMobile = useMemo(() => parseInt(theme.breakpoints.mobile), [theme.breakpoints.mobile]);
  const isHeaderVisible = useHeaderVisibility(); // Hook do zarządzania widocznością nagłówka
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpointMobile);// przerwanie dla mniejszych ekranów
  const [isDarkMode, setDarkMode] = useState<boolean>(true); // Stan dla motywu (domyślnie dark)

  const overlayRef = useRef<HTMLDivElement | null>(null); // Refs dla overlay i menu

  // Zmieniamy body i globalne style przy zmianie motywu
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', isDarkMode ? theme.colors.bgCrowBlack : theme.colors.bgLupineBlue);
    root.style.setProperty('--text-color', isDarkMode ? theme.colors.textWhite : theme.colors.textDarkNavy);
  }, [isDarkMode, theme]);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= breakpointMobile;
      setIsMobile(isNowMobile);

      if (!isNowMobile && isMenuOpen) {
        toggleMenu(); // Zamknij menu, jeśli przechodzimy z trybu mobilnego do desktopowego
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, toggleMenu, breakpointMobile]);

  const handleMenuClick = (event: React.MouseEvent) => {
    if (isMobile) {
      toggleMenu();
    }
    event.stopPropagation();
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
      toggleMenu();
    }
    event.stopPropagation();
  };

  const handleSocialMediaClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <>
      <HeaderWrapper
        className={`${isHeaderVisible ? 'visible' : 'hidden'} ${
          isMenuOpen ? 'menu-open' : ''
        }`}
      >
        <Logo>
          <MdPets /> Logo <FaDog />
        </Logo>
        <Nav>
          <StyledNavLink as={NavLink} to="/" onClick={handleMenuClick}>
            <FaHome /> Home
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/achievements" onClick={handleMenuClick}>
            <FaAward /> Osiągnięcia
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/contact" onClick={handleMenuClick}>
            <MdContactPhone /> Kontakt
          </StyledNavLink>
          <SocialMediaWrapper>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialMediaClick}
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialMediaClick}
            >
              <FaFacebook />
            </a>
          </SocialMediaWrapper>
          <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </ThemeToggleButton>
        </Nav>
        
        <MobileMenuIcon onClick={toggleMenu}>
          <FaBars />
        </MobileMenuIcon>
      </HeaderWrapper>

      {isMenuOpen && (
        <Overlay ref={overlayRef} onClick={handleOverlayClick}>
          <MobileNav>
            <button onClick={handleCloseClick}>
              <FaTimes />
            </button>
            <ThemeToggleButton onClick={toggleTheme}>
              {isDarkMode ? <FaMoon /> : <FaSun />}
            </ThemeToggleButton>
            
            <MobileNavLink as={NavLink} to="/" onClick={handleMenuClick}>
              <FaHome /> Home
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/achievements" onClick={handleMenuClick}>
              <FaAward /> Osiągnięcia
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/contact" onClick={handleMenuClick}>
              <MdContactPhone /> Kontakt
            </MobileNavLink>
            <SocialMediaWrapper>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialMediaClick}
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialMediaClick}
              >
                <FaFacebook />
              </a>
            </SocialMediaWrapper>
          </MobileNav>
        </Overlay>
      )}
    </>
  );
};

export default Header;

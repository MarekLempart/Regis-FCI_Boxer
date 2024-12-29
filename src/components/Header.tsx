// src/components/Header.tsx

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaHome, FaAward, FaCloudSun, FaCloudMoon } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { useHeaderVisibility } from '../hooks/useHeaderVisibility';
import useThemeContext from '../hooks/useThemeContext';
import {
  HeaderWrapper,
  Logo,
  StyledImage,
  LogoName,
  Nav,
  StyledNavLink,
  MobileMenuIcon,
  MobileNav,
  MobileNavLink,
  SocialMediaWrapper,
  Overlay,
  ThemeToggleButton,
  MobileIconsContainer,
} from '../styles/HeaderStyles';
import LogoRegisImage from '../img/Logo_Regis1.png';

// Definicja typów propsów
interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const theme = useTheme();
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const breakpointMobile = useMemo(() => parseInt(theme.breakpoints.mobile), [theme.breakpoints.mobile]);
  const isHeaderVisible = useHeaderVisibility(); // Hook do zarządzania widocznością nagłówka
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpointMobile);// przerwanie dla mniejszych ekranów

  const overlayRef = useRef<HTMLDivElement | null>(null); // Refs dla overlay i menu

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

  const ImageComponent = () => (
    <StyledImage src={LogoRegisImage} alt='Regis Logo' />
  );

  return (
    <>
      <HeaderWrapper
        className={`${isHeaderVisible ? 'visible' : 'hidden'} ${
          isMenuOpen ? 'menu-open' : ''
        }`}
      >
        <Logo>
            <ImageComponent />
            <LogoName>REGIS - bokser</LogoName>
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
            {currentTheme === 'dark' ? <FaCloudMoon /> : <FaCloudSun />}
          </ThemeToggleButton>
        </Nav>
        
      {/* Kontener dla mobilnych ikon */}
        {isMobile && (
          <MobileIconsContainer>
            <ThemeToggleButton onClick={toggleTheme}>
              {currentTheme === 'dark' ? <FaCloudMoon /> : <FaCloudSun />}
            </ThemeToggleButton>
            <MobileMenuIcon onClick={toggleMenu}>
              <FaBars />
            </MobileMenuIcon>
          </MobileIconsContainer>
        )}        
        
      </HeaderWrapper>

      {isMenuOpen && (
        <Overlay ref={overlayRef} onClick={handleOverlayClick}>
          <MobileNav>
            <button onClick={handleCloseClick}>
              <FaTimes />
            </button>
            
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

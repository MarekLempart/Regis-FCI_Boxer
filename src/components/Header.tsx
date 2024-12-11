// src/components/Header.tsx

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaDog, FaHome, FaAward } from 'react-icons/fa';
import { MdPets, MdContactPhone } from 'react-icons/md';
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
} from '../styles/HeaderStyles';

// Definicja typów propsów
interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const theme = useTheme();
  const breakpointMobile = useMemo(() => parseInt(theme.breakpoints.mobile), [theme.breakpoints.mobile]);
  
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpointMobile); // przerwanie dla mniejszych ekranów

  // Refs dla overlay i menu
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false); // Ukryj header przy przewijaniu w dół
      } else {
        setHeaderVisible(true); // Pokaż header przy przewijaniu w górę
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      const isNowMobile = window.innerWidth <= breakpointMobile; // Sprawdzamy, czy ekran jest nadal mobilny
      setIsMobile(isNowMobile);

      // Jeśli przechodzimy z trybu mobilnego do desktopowego, zamykamy menu
      if (!isNowMobile && isMenuOpen) {
        toggleMenu(); // Zamykamy menu, gdy ekran staje się większy
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Nasłuchuj zmiany rozmiaru okna

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Usuwamy nasłuchiwanie podczas czyszczenia
    };
  }, [lastScrollY, isMenuOpen, toggleMenu, breakpointMobile]); // Zależności w useEffect uwzględniają zmiany w menu i rozmiarze okna

  const handleMenuClick = (event: React.MouseEvent) => {
    if (isMobile) {
      toggleMenu();  // Tylko na urządzeniach mobilnych zamykamy menu
    }
    event.stopPropagation(); // Zatrzymuje propagację eventu, aby nie zamknąć menu podczas kliknięcia w sam link
  };

  // Funkcja do obsługi kliknięcia w przycisku zamykania
  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Zatrzymanie propagacji, aby kliknięcie w przycisk nie zamknęło menu
    toggleMenu();  // Zamykanie menu przy kliknięciu w przycisk
  };

  // Funkcja do obsługi kliknięcia w overlay (tło), które zamyka menu
  const handleOverlayClick = (event: React.MouseEvent) => {
    // Jeśli klikniesz w tło (overlay), zamykamy menu
    if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
      toggleMenu(); // Zamykamy menu
    }
    event.stopPropagation(); // Zatrzymanie propagacji, żeby kliknięcie w tło zamknęło menu
  };

  // Funkcja do obsługi kliknięcia w ikony social media
  const handleSocialMediaClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Zatrzymujemy propagację eventu, żeby nie zamknąć menu
    // Zamykanie menu po kliknięciu w ikony
    toggleMenu();
  };

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
          {/* Social Media Icons on Desktop */}
          <SocialMediaWrapper>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialMediaClick} // Obsługuje kliknięcie na ikony
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialMediaClick} // Obsługuje kliknięcie na ikony
            >
              <FaFacebook />
            </a>
          </SocialMediaWrapper>
        </Nav>
        <MobileMenuIcon onClick={toggleMenu}>
          <FaBars />
        </MobileMenuIcon>
      </HeaderWrapper>

      {/* Overlay and Mobile Menu */}
      {isMenuOpen && (
        <Overlay
          ref={overlayRef} // Referencja do tła
          onClick={handleOverlayClick} // Kliknięcie w tło zamyka menu
        >
          <MobileNav ref={menuRef}>
            <button onClick={handleCloseClick}> {/* Obsługuje zamknięcie przycisku */}
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
            {/* Social Media Icons in Mobile Menu */}
            <SocialMediaWrapper>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialMediaClick} // Obsługuje kliknięcie na ikony
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialMediaClick} // Obsługuje kliknięcie na ikony
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

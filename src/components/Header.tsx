// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaDog } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
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
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <HeaderWrapper
      className={`${isHeaderVisible ? 'visible' : 'hidden'} ${
        isMenuOpen ? 'menu-open' : ''
        }`}>
        <Logo><MdPets /> Logo <FaDog /></Logo>        
        <Nav>
          <StyledNavLink as={NavLink} to="/">
            Home
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/about">
            About
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/contact">
            Contact
          </StyledNavLink>
          {/* Social Media Icons on Desktop */}
          <SocialMediaWrapper>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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
        <Overlay onClick={toggleMenu}>
          <MobileNav>
            <button onClick={toggleMenu}>
              <FaTimes />
            </button>
            <MobileNavLink as={NavLink} to="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/about" onClick={toggleMenu}>
              About
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            {/* Social Media Icons in Mobile Menu */}
            <SocialMediaWrapper>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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

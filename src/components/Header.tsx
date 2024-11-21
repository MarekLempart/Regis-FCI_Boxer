// src/components/Header.tsx

// import { NavLink } from 'react-router-dom';

// const Header = () => (
//     <header>
//         <nav>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//         </nav>
//     </header>
// );

// export default Header;

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

const Header: React.FC = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const closeModalOnOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setMobileNavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HeaderWrapper>
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
        <MobileMenuIcon onClick={() => setMobileNavOpen(true)}>
          <FaBars />
        </MobileMenuIcon>
      </HeaderWrapper>

      {/* Overlay and Mobile Menu */}
      {isMobileNavOpen && (
        <Overlay onClick={closeModalOnOutsideClick}>
          <MobileNav>
            <button onClick={() => setMobileNavOpen(false)}>
              <FaTimes />
            </button>
            <MobileNavLink as={NavLink} to="/" onClick={() => setMobileNavOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/about" onClick={() => setMobileNavOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/contact" onClick={() => setMobileNavOpen(false)}>
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

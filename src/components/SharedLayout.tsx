// src/components/SharedLayout.tsx
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MainWrapper } from '../styles/SharedLayoutStyles';

const SharedLayout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      <Header isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <MainWrapper>
        <Outlet /> {/* Miejsce na zmienianą zawartość strony */}
      </MainWrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;

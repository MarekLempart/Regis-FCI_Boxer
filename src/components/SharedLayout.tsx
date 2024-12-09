// src/components/SharedLayout.tsx
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MainWrapper, Spinner } from '../styles/SharedLayoutStyles';

const SharedLayout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      <Header isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <MainWrapper>
        {isLoading ? (
          <Spinner size='large' tip='Loading...' />
        ) : (
          <Outlet />
        )}        
      </MainWrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;

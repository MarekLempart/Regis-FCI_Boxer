// src/components/SharedLayout.tsx
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { MainWrapper, Spiner } from '../styles/SharedLayoutStyles';
import { LoadingOutlined } from '@ant-design/icons';

const SharedLayout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();
  
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer)
  }, []);

  // Użycie niestandardowego wskaźnika spinnera
  const antIcon = <LoadingOutlined style={{ fontSize: 96, color: theme.colors.textOrange }} spin />;

  return (
    <>
      <Header isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <MainWrapper>
        {isLoading ? (
          <Spiner indicator={antIcon} />
        ) : (
          <Outlet />
        )}        
      </MainWrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;

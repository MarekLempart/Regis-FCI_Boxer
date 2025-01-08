// src/components/SharedLayout.tsx // remove it

import { useState, useEffect, lazy, Suspense } from "react";
import { useTheme } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { MainWrapper, Spiner } from "../styles/SharedLayoutStyles";
import { LoadingOutlined } from "@ant-design/icons";

const LazyOutlet = lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

const SharedLayout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Użycie niestandardowego wskaźnika spinnera
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 96, color: theme.colors.textOrange }}
      spin
    />
  );

  return (
    <>
      <Header isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <MainWrapper>
        {isLoading ? (
          <Spiner indicator={antIcon} />
        ) : (
          <Suspense fallback={<Spiner indicator={antIcon} />}>
            <LazyOutlet />
          </Suspense>
        )}
      </MainWrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;

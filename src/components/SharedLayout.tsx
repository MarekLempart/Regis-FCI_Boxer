// src/components/SharedLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Miejsce na zmienianą zawartość strony */}
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;

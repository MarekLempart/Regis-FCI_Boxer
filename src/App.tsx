//src/app.tsx
import { Routes, Route } from 'react-router-dom';
// Importuj strony oraz SharedLayout
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import SharedLayout from './components/SharedLayout';
// Import ScrollToTop
import ScrollToTop from './components/ScrollToTop';
// Import ToastContainer
import { ToastContainer } from "react-toastify";
// Import stylów Toastify
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='page-container'>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
      {/* Ścieżka z układem SharedLayout */}
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} /> {/* Domyślna strona */}
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>  
    </div>    
  );
}

export default App;

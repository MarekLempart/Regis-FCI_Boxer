//src/app.tsx
import { Routes, Route } from 'react-router-dom';
// import './App.css';

// Importuj strony oraz SharedLayout
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SharedLayout from './components/SharedLayout';

function App() {
  return (
    <div className='page-container'>
      <Routes>
      {/* Ścieżka z układem SharedLayout */}
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} /> {/* Domyślna strona */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>  
    </div>    
  );
}

export default App;
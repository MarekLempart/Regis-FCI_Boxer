//src/app.tsx // remove it
import { Routes, Route } from "react-router-dom";
// Importuj strony oraz SharedLayout // remove it
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import SharedLayout from "./components/SharedLayout";
// Import ScrollToTop // remove it
import ScrollToTop from "./components/ScrollToTop";
// Import ToastContainer // remove it
import { ToastContainer } from "react-toastify";
// Import stylów Toastify // remove it
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="page-container">
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

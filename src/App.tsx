//src/app.tsx // remove it
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import SharedLayout from "./components/SharedLayout";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="page-container">
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        {/* Ścieżka z układem SharedLayout */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

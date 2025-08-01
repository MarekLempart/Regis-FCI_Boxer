// scr/main.tsc
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import 'antd/dist/reset.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);

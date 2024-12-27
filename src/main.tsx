// scr/main.tsc

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import 'antd/dist/reset.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeContextProvider>
  </StrictMode>
);

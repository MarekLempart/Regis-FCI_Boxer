// scr/main.tsc
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.ts';
import { theme } from './styles/theme.ts';
import 'antd/dist/reset.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(  
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>        
    </StrictMode>  
);

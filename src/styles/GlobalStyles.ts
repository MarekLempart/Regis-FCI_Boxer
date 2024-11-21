// src/styles/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.bgDarkNavy};
    color: ${({ theme }) => theme.colors.textWhite};
    min-height: 100vh;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.textOrange};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.textBrightBrown};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    text-align: center;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    text-align: left;
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Oswald:wght@400;500;700&display=swap');
`;

export default GlobalStyles;

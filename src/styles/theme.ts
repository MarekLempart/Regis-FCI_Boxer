// src/styles/theme.ts

export const theme = {
    colors: {
      textWhite: '#f8f9fa',
      textDarkNavy: '#0a1f44',
      textDarkBlue: '#162e5c',
      textOrange: '#c87533',
      textBrightBrown: '#a14d26',
      textChickenComb: '#db2323',
      bgWhite: '#f8f9fa',
      bgLightGray: '#d3d3d3',
      bgDarkGray: '#a9a9a9',
      bgDarkNavy: '#0a1f44',
      bgLupineBlue: '#6995b9',    
      bgCrowBlack: '#263348',
      bgOrange: '#c87533',
      bgBrightBrown: '#a14d26',
    },
    headerHeight: '70px', // Dodajemy wysokość headera
    breakpoints: {
      mobile: '768px',
      tablet: '1200px',
      desktop: '1680px',
    },
    media: {
      mobile: `(max-width: 767px)`,
      tablet: `(min-width: 768px) and (max-width: 1199px)`,
      desktop: `(min-width: 1200px)`,
      tabletAndDesktop: `(min-width: 768px)`,
    },
    spacing: {
      mobilePadding: '5px',
      tabletPadding: '10px',
      desktopPadding: '0px',
    },
  };

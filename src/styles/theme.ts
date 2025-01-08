// src/styles/theme.ts // remove it

export const theme = {
  colors: {
    textWhite: "#f8f9fa",
    textDarkNavy: "#0a1f44",
    textDarkBlue: "#162e5c",
    textOrange: "#c87533",
    textBrightBrown: "#a14d26",
    textChickenComb: "#db2323",
    bgWhite: "#f8f9fa",
    bgLightGray: "#d3d3d3",
    bgDarkGray: "#a9a9a9",
    bgRichPewter: "#6a6f70",
    bgDarkNavy: "#0a1f44",
    bgJacarandaLight: "#a7acb9",
    bgCrowBlack: "#263348",
    bgOrange: "#c87533",
    bgBrightBrown: "#a14d26",
  },

  headerHeight: "70px",

  breakpoints: {
    mobile: "768px",
    tablet: "1200px",
    desktop: "1440px",
  },
  media: {
    mobile: `(max-width: 767px)`,
    tablet: `(min-width: 768px) and (max-width: 1199px)`,
    desktop: `(min-width: 1200px)`,
    tabletAndDesktop: `(min-width: 768px)`,
  },
  spacing: {
    mobilePadding: "5px",
    tabletPadding: "10px",
    desktopPadding: "0px",
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bgPrimary: theme.colors.bgJacarandaLight,
    textPrimary: theme.colors.textDarkNavy,
    accent: theme.colors.textBrightBrown,
    hover: theme.colors.textBrightBrown,
    hoverButton: theme.colors.bgRichPewter,
    distinction: theme.colors.textBrightBrown,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bgPrimary: theme.colors.bgCrowBlack,
    textPrimary: theme.colors.textWhite,
    accent: theme.colors.textOrange,
    hover: theme.colors.textOrange,
    hoverButton: theme.colors.bgLightGray,
    distinction: theme.colors.textOrange,
  },
};

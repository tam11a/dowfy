import { createTheme } from "@mui/material/styles";

// colors
const primary = "#FFDA17";
const secondary = "#F5737F";
const tarnary = "#7289DA";
const black = "#1d252c ";
const blackDark = "#171d23";
const blackLight = "#1d252c";
const white = "#fff";

// breakpoints
const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};
const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: black,
    },
    secondary: {
      main: secondary,
      contrastText: black,
    },
    tarnary: {
      main: tarnary,
      contrastText: black,
    },
    black: {
      main: black,
      dark: blackDark,
      light: blackLight,
      search: '#2C3448',
      contrastText: primary,
    },
    background: {
      default: black,
      paper: blackDark,
      dark: blackDark,
      light: blackLight,
      contrastText: white,
    },
    white: {
      main: white,
      dark: '#848993',
      contrastText: primary,
    },
    navbar: {
      main: blackDark,
      contrastText: primary,
    },
    text: {
      primary: white,
      secondary: primary,
    },
  },
  typography: {
    fontFamily: "Rajdhani, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "2px",
          fontWeight: "500",
        },
      },
    },
  },
});

export default theme;

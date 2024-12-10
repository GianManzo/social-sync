import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#fb1",
    secondary: "#2ecc71",
    background: "#f5f5f5",
    text: "#333333",
    error: "#f31",
  },
  typography: {
    sizes: {
      small: "12px",
      regular: "16px",
      large: "24px",
    },
    weights: {
      regular: 400,
      bold: 700,
    },
    fonts: {
      primary: "Helvetica, Arial, sans-serif",
      secondary: "'Spectral', Georgia, serif",
    },
  },
  spacings: {
    small: "8px",
    regular: "16px",
    large: "24px",
    extraLarge: "32px",
  },
};

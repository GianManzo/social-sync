import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
    };
    typography: {
      sizes: {
        small: string;
        regular: string;
        large: string;
      };
      weights: {
        regular: number;
        bold: number;
      };
      fonts: {
        primary: string;
        secondary: string;
      };
    };
    spacings: {
      small: string;
      regular: string;
      large: string;
      extraLarge: string;
    };
  }
}

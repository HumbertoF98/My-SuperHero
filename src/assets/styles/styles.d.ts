import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryDark: string;
      primaryGray: string;

      primaryPink: string;

      white: string;
    };
    borderRadius: {
      default: string;
    };
  }
}

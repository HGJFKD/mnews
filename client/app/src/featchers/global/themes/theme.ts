export type ColorType = {
    primary: string;
    secondary: string;
    light: string;
  };
  
  export type BackgroundColorType = {
    primary: string;
    secondary: string;
    light: string;
  };
  
  export type ThemeType = {
    text: string;
    color: ColorType;
    backgroundColor: BackgroundColorType;
  };
  
  export const darkTheme: ThemeType = {
    text: "center",
    color: {
      primary: "blue",
      secondary: "#999999",
      light: "#bbbbbb",
    },
    backgroundColor: {
      primary: "black",
      secondary: "#999999",
      light: "#bbbbbb",
    },
  };
  
  export const lightTheme: ThemeType = {
    ...darkTheme,
    color: {
      primary: "black",
      secondary: "#010101",
      light: "#eeeeee",
    },
    backgroundColor: {
      primary: "wight",
      secondary: "#999999",
      light: "#eeeeee",
    },
  };
  
 
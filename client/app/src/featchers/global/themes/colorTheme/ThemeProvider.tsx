import {
    useState,
    useContext,
    ReactNode,
    SetStateAction,
    Dispatch,
    FC,
    createContext,
  } from "react";
  import { ThemeProvider as StyledTheme } from "styled-components";
  import { darkTheme, lightTheme } from "./theme";
  
  export type ThemeModeType = "light" | "dark";
  
  type ContextValue = {
    mode: ThemeModeType;
    setMode: Dispatch<SetStateAction<ThemeModeType>>;
    toggleTheme: () => void;
  };
  
  const ThemeContext = createContext<null | ContextValue>(null);
  const { Provider } = ThemeContext;
  
  type ThemeProviderProps = {
    children: ReactNode;
  };
  
  const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<ThemeModeType>("light");
  
    const toggleTheme = () =>
      mode === "light" ? setMode("dark") : setMode("light");
  
    return (
      <Provider value={{ mode, setMode, toggleTheme }}>
        <StyledTheme theme={mode === "dark" ? darkTheme : lightTheme}>
          {children}
        </StyledTheme>
      </Provider>
    );
  };
  
  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
  };
  
  export default ThemeProvider;
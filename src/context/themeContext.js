import React, { createContext, useContext, useEffect, useState } from "react";
import pallate from "../data/colorpalate";

const theme = createContext();

const ThemeContext = ({ children }) => {
  let [ThemeCode, setThemeCode] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(pallate[ThemeCode]);
  const [DarkMode, setDarkMode] = useState(true);
  const [PriceCurrency, setPriceCurrency] = useState("$");
  const [ActivateSearch, srtActivateSearch] = useState(false);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    ThemeCode >= 5 && setThemeCode(0);
    setCurrentTheme(pallate[ThemeCode]);
  }, [ThemeCode, currentTheme]);
  return (
    <theme.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        DarkMode,
        setDarkMode,
        ThemeCode,
        setThemeCode,
        PriceCurrency,
        setPriceCurrency,
        ActivateSearch,
        srtActivateSearch,
        disabled,
        setDisabled,
      }}
    >
      {children}
    </theme.Provider>
  );
};

const useStateContext = () => {
  return useContext(theme);
};
export default ThemeContext;
export { useStateContext };

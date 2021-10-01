// create a react context for theme
import React, { useContext } from "react";
import ThemeContext from "styled-components";

const AppThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = React.useState("light");
  const appThemeContext = useContext(ThemeContext);

  const switchTheme = (theme) => {
    setTheme(theme);
  };

  console.log(appThemeContext, "app theme context");

  return (
    <AppThemeContext.Provider value={{theme, switchTheme}}>
      {props.children}
    </AppThemeContext.Provider>
  );
};

export { AppThemeContext, ThemeContextProvider };

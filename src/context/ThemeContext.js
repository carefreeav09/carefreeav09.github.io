// create a react context for theme
import React from "react";

const AppThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = React.useState("dark");

  const [appLayout, setAppLayout] = React.useState({
    size: "0px",
    transparent: true,
  });

  const setSize = (size) => {
    setAppLayout({
      ...appLayout,
      size,
    });
  };

  const setTransparency = (transparent) => {
    setAppLayout({
      ...appLayout,
      transparent,
    });
  };

  const switchTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <AppThemeContext.Provider
      value={{ appLayout, theme, switchTheme, setSize, setTransparency }}
    >
      {props.children}
    </AppThemeContext.Provider>
  );
};

export { AppThemeContext, ThemeContextProvider };

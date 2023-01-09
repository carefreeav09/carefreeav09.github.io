import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppThemeContext } from "../context/ThemeContext";

import light from "./light";
import dark from "./dark";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    transition: all 0.5s;
  }
`;

const Theme = ({ children }) => {
  const { theme, appBaseColor } = useContext(AppThemeContext);
  console.log(dark, "dark");
  console.log(
    appBaseColor,
    "app base color",
    theme,
    "theme",
    {
      ...dark,
      colors: {
        ...dark.colors,
        secondaryColor: appBaseColor,
      },
    },
    "dark theme"
  );

  return (
    <ThemeProvider
      theme={
        theme === "light"
          ? {
              ...light,
              colors: {
                ...light.colors,
                secondaryColor: appBaseColor,
              },
            }
          : {
              ...dark,
              colors: {
                ...dark.colors,
                secondaryColor: appBaseColor,
              },
            }
      }
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

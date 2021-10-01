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
  const { theme } = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

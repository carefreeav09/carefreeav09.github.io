import React from "react";
import { AppThemeContext } from "../../context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }) => {
  const { appLayout } = React.useContext(AppThemeContext);
  return (
    <div>
      <Header />
      <section
        id="body"
        style={{
          marginTop: `-${appLayout.size}`,
        }}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Main;

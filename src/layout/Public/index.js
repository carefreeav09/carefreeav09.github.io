import React from "react";
import { AppThemeContext } from "../../context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import './layoutPublic.css';

const Main = ({ children }) => {
  const { appLayout } = React.useContext(AppThemeContext);
  return (
    <div className="carefreeav-page-wrapper">
      <div className="carefreeav-page-content">
        {console.log(appLayout.size, 'size')}
        <Header />
        <section
          id="body"
          style={{
            marginTop: `-${appLayout.size}`,
          }}
        >
          {children}
        </section>
      </div>
      <Footer className="carefreeav-page-footer" />
    </div>
  );
};

export default Main;

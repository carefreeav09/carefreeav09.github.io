import React from "react";
import { Navbar } from "../components";

import { AppThemeContext } from "../context/ThemeContext";

const Main = ({ children }) => {
  const { appLayout } = React.useContext(AppThemeContext);
  return (
    <div>
      <Navbar
        title={"Carefreeav"}
        size="md"
        // transparent
        spacing="container"
        navLists={[
          {
            name: "About",
            link: "/about",
          },
          {
            name: "Dropdown",
            link: "dropdown",
            dropdown: true,
            dropdownItems: [
              {
                name: "Dropdown Item 1",
                link: "dropdown-item-1",
                onClick: () => {
                  console.log("i am here");
                },
              },
              {
                name: "Dropdown Item 2",
                link: "dropdown-item-2",
              },
            ],
          },
        ]}
      />

      {console.log(appLayout.size, "size")}
      <section
        id="body"
        style={{
          marginTop: `-${appLayout.size}`,
        }}
      >
        {children}
      </section>
    </div>
  );
};

export default Main;

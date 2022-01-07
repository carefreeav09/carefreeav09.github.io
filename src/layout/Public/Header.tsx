import React from "react";
import { Navbar } from "../../components";

const Header = () => {
  return (
    <Navbar
      title={"Carefreeav"}
      size="md"
      spacing="container"
      navLists={[
        {
          name: "Components",
          link: "/components",
        },
        {
          name: "Blog",
          link: "/blogs",
        },
        {
          name: "Contact Me",
          link: "/contact",
        },
        // {
        //   name: "Dropdown Text",
        //   link: "dropdownText",
        //   dropdown: true,
        //   dropdownItems: [
        //     {
        //       name: "Dropdown Item 1",
        //       link: "dropdownItem1",
        //     },
        //     {
        //       name: "Dropdown Item 2",
        //       link: "dropdownItem2",
        //     },
        //   ],
        // },
      ]}
    />
  );
};

export default Header;

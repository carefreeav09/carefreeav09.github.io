import React from "react";
import { Navbar } from "../../components";

const Header = () => {
  return (
    <Navbar
      title={"Carefreeav"}
      size="md"
      transparent
      spacing="container"
      navLists={[
        {
          name: "Components",
          link: "/components",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Contact Me",
          link: "/contact"
        }
      ]}
    />
  );
};

export default Header;

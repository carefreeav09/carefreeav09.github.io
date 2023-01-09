import React from "react";

import { Navbar } from "../../components";

const Header = () => {
  return (
    <Navbar
      title={"Carefreeav"}
      size="md"
      spacing="container"
      navLists={[
        // {
        //   name: "Components",
        //   link: "/components",
        // },
        {
          name: "Blog",
          link: "/blogs",
        },
        {
          name: "Contact Me",
          link: "/contact",
        },
      ]}
    />
  );
};

export default Header;

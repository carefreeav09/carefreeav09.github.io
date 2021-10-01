import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBNavbarLink,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { AppThemeContext } from "../context/ThemeContext";
import Switch from "./Switch";

const Navbar = () => {
  const { switchTheme, theme } = React.useContext(AppThemeContext);
  const [showBasic, setShowBasic] = React.useState(false);

  return (
    <div>
      <MDBNavbar expand="lg" light={theme === "light"} dark={theme === "dark"}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Apps per Day</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <Switch
                handleSwitch={switchTheme}
                trueValue="dark"
                falseValue="light"
              />
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;

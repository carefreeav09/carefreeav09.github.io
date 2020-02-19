
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

  const ComponentsNavbar = props => {
    const [state, setState] = useState({collapseOpen: false, color: 'navbar-transparent'});
    
    useEffect(()=> {
      window.addEventListener("scroll", changeColor);
      return () => {
        window.removeEventListener("scroll", changeColor);
      }
    }, []);
    
    const changeColor = () => {
      if (
          document.documentElement.scrollTop > 99 ||
          document.body.scrollTop > 99
      ) {
        setState({
          color: "bg-dark"
        });
      } else if (
          document.documentElement.scrollTop < 100 ||
          document.body.scrollTop < 100
      ) {
        setState({
          color: "navbar-transparent"
        });
      }
    };
    
    const toggleCollapse = () => {
      document.documentElement.classList.toggle("nav-open");
      setState({
        collapseOpen: !state.collapseOpen
      });
    };
    const onCollapseExiting = () => {
      setState({
        collapseOut: "collapsing-out"
      });
    };
    const onCollapseExited = () => {
      setState({
        collapseOut: ""
      });
    };

      return (
          <Navbar
              className={"fixed-top " + state.color}
              color-on-scroll="100"
              expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <NavbarBrand
                    data-placement="bottom"
                    to="/"
                    rel="noopener noreferrer"
                    title="Designed and Coded by Creative Tim"
                    tag={Link}
                >
                  <span>CarefreeCoders</span>
                </NavbarBrand>
                <button
                    aria-expanded={state.collapseOpen}
                    className="navbar-toggler navbar-toggler"
                    onClick={toggleCollapse}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse
                  className={"justify-content-end " + state.collapseOut}
                  navbar
                  isOpen={state.collapseOpen}
                  onExiting={onCollapseExiting}
                  onExited={onCollapseExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                  <span onClick={e => e.preventDefault()}>
                    CarefreeCoders
                  </span>
                    </Col>
                    <Col className="collapse-close text-right" xs="6">
                      <button
                          aria-expanded={state.collapseOpen}
                          className="navbar-toggler"
                          onClick={toggleCollapse}
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav navbar>
                  <NavItem className="p-0">
                    <NavLink
                        data-placement="bottom"
                        href="https://twitter.com/CreativeTim"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Follow us on Twitter"
                    >
                      <i className="fab fa-twitter" />
                      <p className="d-lg-none d-xl-none">Twitter</p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="p-0">
                    <NavLink
                        data-placement="bottom"
                        href="https://www.facebook.com/CreativeTim"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Like us on Facebook"
                    >
                      <i className="fab fa-facebook-square" />
                      <p className="d-lg-none d-xl-none">Facebook</p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="p-0">
                    <NavLink
                        data-placement="bottom"
                        href="https://www.instagram.com/CreativeTimOfficial"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Follow us on Instagram"
                    >
                      <i className="fab fa-instagram" />
                      <p className="d-lg-none d-xl-none">Instagram</p>
                    </NavLink>
                  </NavItem>
                  {/*<UncontrolledDropdown nav>*/}
                  {/*  <DropdownToggle*/}
                  {/*    caret*/}
                  {/*    color="default"*/}
                  {/*    data-toggle="dropdown"*/}
                  {/*    href="#pablo"*/}
                  {/*    nav*/}
                  {/*    onClick={e => e.preventDefault()}*/}
                  {/*  >*/}
                  {/*    <i className="fa fa-cogs d-lg-none d-xl-none" />*/}
                  {/*    Getting started*/}
                  {/*  </DropdownToggle>*/}
                  {/*  <DropdownMenu className="dropdown-with-icons">*/}
                  {/*    <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/tutorial">*/}
                  {/*      <i className="tim-icons icon-paper" />*/}
                  {/*      Documentation*/}
                  {/*    </DropdownItem>*/}
                  {/*    <DropdownItem tag={Link} to="/register-page">*/}
                  {/*      <i className="tim-icons icon-bullet-list-67" />*/}
                  {/*      Register Page*/}
                  {/*    </DropdownItem>*/}
                  {/*    <DropdownItem tag={Link} to="/landing-page">*/}
                  {/*      <i className="tim-icons icon-image-02" />*/}
                  {/*      Landing Page*/}
                  {/*    </DropdownItem>*/}
                  {/*    <DropdownItem tag={Link} to="/profile-page">*/}
                  {/*      <i className="tim-icons icon-single-02" />*/}
                  {/*      Profile Page*/}
                  {/*    </DropdownItem>*/}
                  {/*  </DropdownMenu>*/}
                  {/*</UncontrolledDropdown>*/}
                  {/*<NavItem>*/}
                  {/*  <Button*/}
                  {/*    className="nav-link d-none d-lg-block"*/}
                  {/*    color="default"*/}
                  {/*    onClick={scrollToDownload}*/}
                  {/*  >*/}
                  {/*    <i className="tim-icons icon-cloud-download-93" /> Download*/}
                  {/*  </Button>*/}
                  {/*</NavItem>*/}
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
      );
}

export default ComponentsNavbar;

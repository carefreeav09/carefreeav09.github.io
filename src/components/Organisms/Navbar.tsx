import React from "react";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../../context/ThemeContext";
import Switch from "../Atoms/Switch";

interface INavLists {
  name: string;
  link: string;
  disabled?: boolean;
  dropdown?: boolean;
  dropdownItems?: Array<INavLists>;
  onClick?: () => void;
}

interface NavbarProps {
  title: string | React.ReactElement;
  transparent?: boolean;
  spacing: "container" | "fluid";
  navLists?: INavLists[];
  navListsRight?: INavLists[];
  form?: React.ReactDOM;
  fixed?: string;
  sticky?: boolean;
  size?: "sm" | "lg" | "md" | "xl";
}

const Navbar = ({
  title,
  transparent,
  spacing,
  navLists,
  navListsRight,
  fixed,
  size,
}: NavbarProps) => {
  const { setTransparency, setSize, switchTheme, theme } =
    React.useContext(AppThemeContext);

  const getNavSize = () => {
    switch (size) {
      case "sm":
        return "50px";
      case "lg":
        return "120px";
      case "md":
        return "80px";
      case "xl":
        return "160px";
      default:
        return "80px";
    }
  };

  React.useEffect(() => {
    if (transparent) {
      setTransparency(true);
      setSize(getNavSize());
    } else {
      setTransparency(false);
      setSize("0px");
    }
    // eslint-disable-next-line
  }, [transparent]);

  let navbarStyles = {
    backgroundColor: transparent
      ? "transparent"
      : theme?.colors?.backgroundColor,
    boxShadow: transparent
      ? "0 0 transparent"
      : "0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%)",
    height: getNavSize(),
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "light" ? "navbar-light" : "navbar-dark"
      }`}
      style={navbarStyles}
    >
      <div
        className={spacing === "container" ? "container" : "container-fluid"}
      >
        <Link to={"/"} className="nav-link cursor-pointer">
          <div className="navbar-brand">{title}</div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLists?.map((navList, index) => (
              <li
                key={index}
                className={`nav-item ${navList.dropdown ? "dropdown" : ""}`}
              >
                {navList.dropdown ? (
                  <span className="nav-link cursor-pointer p-0">
                    <span
                      className={"nav-link dropdown-toggle"}
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {navList.name}
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {navList?.dropdownItems?.map((dropdownItem, dIndex) => (
                        <li onClick={dropdownItem?.onClick}>
                          <Link
                            className="dropdown-item"
                            to={dropdownItem.link}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                ) : (
                  <Link to={navList.link} className="nav-link">
                    {navList.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navListsRight?.map((navList, index) => (
              <li
                key={index}
                className={`nav-item ${navList.dropdown ? "dropdown" : ""}`}
              >
                {navList.dropdown ? (
                  <span className="nav-link cursor-pointer p-0">
                    <span
                      className={"nav-link dropdown-toggle"}
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {navList.name}
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {navList?.dropdownItems?.map((dropdownItem, dIndex) => (
                        <li onClick={dropdownItem?.onClick}>
                          <Link
                            className="dropdown-item"
                            to={dropdownItem.link}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                ) : (
                  <Link to={navList.link} className="nav-link">
                    {navList.name}
                  </Link>
                )}
              </li>
            ))}

            <div className="d-flex input-group w-auto mt-1">
              <Switch
                handleSwitch={switchTheme}
                trueValue="dark"
                falseValue="light"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

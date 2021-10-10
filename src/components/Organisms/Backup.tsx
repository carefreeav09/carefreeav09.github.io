// import React from "react";
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarToggler,
//   MDBContainer,
//   MDBIcon,
//   MDBCollapse,
//   MDBNavbarLink,
//   MDBNavbarBrand,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBDropdownLink,
// } from "mdb-react-ui-kit";

// import { Link } from "react-router-dom";
// import { AppThemeContext } from "../../context/ThemeContext";
// import Switch from "../Atoms/Switch";

// interface INavLists {
//   name: string;
//   link: string;
//   disabled?: boolean;
//   dropdown?: boolean;
//   dropdownItems?: Array<INavLists>;
//   onClick?: () => void;
// }

// interface NavbarProps {
//   title: string | React.ReactElement;
//   transparent: boolean;
//   spacing: "container" | "fluid";
//   navLists?: INavLists[];
//   navListsRight?: INavLists[];
//   form?: React.ReactDOM;
//   fixed?: string;
//   sticky?: boolean;
//   size?: "sm" | "lg" | "md" | "xl";
// }

// const Navbar = ({
//   title,
//   transparent,
//   spacing,
//   navLists,
//   navListsRight,
//   fixed,
//   size,
// }: NavbarProps) => {
//   const { setTransparency, setSize, switchTheme, theme } =
//     React.useContext(AppThemeContext);
//   const [showBasic, setShowBasic] = React.useState(false);

//   const getNavSize = () => {
//     switch (size) {
//       case "sm":
//         return "50px";
//       case "lg":
//         return "120px";
//       case "md":
//         return "80px";
//       case "xl":
//         return "160px";
//       default:
//         return "80px";
//     }
//   };

//   React.useEffect(() => {
//     if (transparent) {
//       setTransparency(true);
//       setSize(getNavSize());
//     } else {
//       setTransparency(false);
//       setSize("0px");
//     }
//     // eslint-disable-next-line
//   }, [transparent]);

//   let navbarStyles = {
//     backgroundColor: transparent && "transparent",
//     boxShadow: transparent
//       ? "0 0 transparent"
//       : "0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%)",
//     height: getNavSize(),
//   };

//   return (
//     <MDBNavbar
//       fixed={fixed}
//       expand={"lg"}
//       style={navbarStyles}
//       light={theme === "light"}
//       dark={theme === "dark"}
//     >
//       <MDBContainer fluid={spacing === "fluid"}>
//         <Link to={"/"} className="nav-link cursor-pointer">
//           <MDBNavbarBrand>{title}</MDBNavbarBrand>
//         </Link>

//         <MDBNavbarToggler
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <MDBIcon icon="bars" fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//             {navLists?.map((navList, index) => (
//               <MDBNavbarItem key={index}>
//                 {navList.dropdown ? (
//                   <MDBDropdown>
//                     <MDBDropdownToggle
//                       tag="a"
//                       className="nav-link cursor-pointer"
//                     >
//                       {navList.name}
//                     </MDBDropdownToggle>
//                     <MDBDropdownMenu>
//                       {navList?.dropdownItems?.map((dropdownItem, dIndex) => (
//                         <MDBDropdownItem
//                           href={dropdownItem?.link}
//                           key={dIndex}
//                           data-active="false"
//                           onClick={dropdownItem?.onClick}
//                         >
//                           {dropdownItem?.link && (
//                             <Link to={dropdownItem?.link}>
//                               <MDBDropdownLink className="cursor-pointer">
//                                 {dropdownItem.name}
//                               </MDBDropdownLink>
//                             </Link>
//                           )}
//                         </MDBDropdownItem>
//                       ))}
//                     </MDBDropdownMenu>
//                   </MDBDropdown>
//                 ) : (
//                   <Link to={navList.link}>
//                     <MDBNavbarLink aria-current="page">
//                       {navList.name}
//                     </MDBNavbarLink>
//                   </Link>
//                 )}
//               </MDBNavbarItem>
//             ))}
//           </MDBNavbarNav>

//           <MDBNavbarNav
//             className="ml-auto mb-2 mb-lg-0"
//             style={{
//               justifyContent: "flex-end",
//             }}
//           >
//             {navListsRight?.map((navList, index) => (
//               <MDBNavbarItem key={index}>
//                 {navList.dropdown ? (
//                   <MDBDropdown>
//                     <MDBDropdownToggle
//                       tag="a"
//                       className="nav-link cursor-pointer"
//                     >
//                       {navList.name}
//                     </MDBDropdownToggle>
//                     <MDBDropdownMenu>
//                       {navList?.dropdownItems?.map((dropdownItem, dIndex) => (
//                         <MDBDropdownItem
//                           href={dropdownItem?.link}
//                           key={dIndex}
//                           data-active="false"
//                           onClick={dropdownItem?.onClick}
//                         >
//                           {dropdownItem?.link && (
//                             <Link to={dropdownItem?.link}>
//                               <MDBDropdownLink className="cursor-pointer">
//                                 {dropdownItem.name}
//                               </MDBDropdownLink>
//                             </Link>
//                           )}
//                         </MDBDropdownItem>
//                       ))}
//                     </MDBDropdownMenu>
//                   </MDBDropdown>
//                 ) : (
//                   <Link to={navList.link}>
//                     <MDBNavbarLink aria-current="page" href={navList.link}>
//                       {navList.name}
//                     </MDBNavbarLink>
//                   </Link>
//                 )}
//               </MDBNavbarItem>
//             ))}


//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// };

// export default Navbar;

// Navbar.defaultProps = {
//   size: "lg",
//   transparent: false,
//   spacing: "container",
//   brand: "Navbar",
// };


const Backup = () => {
  return (
    <div>
      
    </div>
  )
}

export default Backup


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import
//  {
//     FaTree
//  } from "react-icons/fa";
// import "./Navbar.css";
// import { navItems } from "./NavbarItems";
// import Button from "./Button";
// import Dropdown from "./Dropdown";

// const Navbar = () =>{
//     const [openSubMenu, setOpenSubMenu] = useState(false);
//     return (
//         <>
//           <nav className="navbar">
//             <Link to="/" className="navbar-logo">
//               NATURE
//               <FaTree />
//             </Link>
//             <ul className="nav-items">
//               {navItems.map((item) => {
//                 if (item.title === "Services") {
//                   return (
//                     <li
//                       key={item.id}
//                       className={item.cName}
//                       onMouseEnter={() => setOpenSubMenu(true)}
//                   onMouseLeave={() => setOpenSubMenu(false)}
//                     >
//                       <Link to={item.path}>{item.title}</Link>
//                       {/* {dropdown && <Dropdown />} */}
//                       {openSubMenu && <Dropdown openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} />}
//                     </li>
//                   );
//                 }
//                 return (
//                   <li key={item.id} className={item.cName}>
//                     <Link to={item.path}>{item.title}</Link>
//                   </li>
//                 );
//               })}
//             </ul>
//             <Button />
//           </nav>
//         </>
//       );
//     }

// export default Navbar

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaTree } from "react-icons/fa";
// import "./Navbar.css";
// import { navItems } from "./NavbarItems";
// import Button from "./Button";
// import Dropdown from "./Dropdown";

// const Navbar = () => {
//   const [openSubMenu, setOpenSubMenu] = useState(false);

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">
//         NATURE <FaTree />
//       </Link>
//       <ul className="nav-items">
//         {navItems.map((item) => {
//           if (item.title === "Services"){
//             return (
//               <li
//                 key={item.id}
//                 className={item.cName}
//                 onMouseEnter={() => setOpenSubMenu(true)}
//                 onMouseLeave={() => setOpenSubMenu(false)}
//               >
//                 <Link to={item.path}>{item.title}</Link>
//                 {openSubMenu && (
//                   <Dropdown
//                     openSubMenu={openSubMenu}
//                     setOpenSubMenu={setOpenSubMenu}
//                   />
//                 )}
//               </li>
//             );
//           }
//           return (
//             <li key={item.id} className={item.cName}>
//               <Link to={item.path}>{item.title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//       <Button />
//     </nav>
//   );
// };

// export default Navbar;

// if (dropdownItems.length)
//  {
// {
/* {navItems.map((item) => {
          if (item.title === "Services"
          || item.title === "Products"
          || item.title === "Sports"
          || item.title === 'Home') {
           const dropdownItems =
                item.title === "Services" ? serviceDropdown  
              : item.title === "Products"  ? serviceDropdownsecond
              : item.title === "Sports"  ? serviceDropdowthird
              : item.title === 'Home'  ? serviceDropdownHome  : []; */
// }
// }
// return (
//   <li key={item.id} className={item.cName}>
//     <Link to={item.path}>{item.title}</Link>
//   </li>
// );
//  {
  /* <ul className="nav-items">
        {navItems.map((item) => {
          const dropdownItems =
            item.title === "Services"   ? serviceDropdown  : item.title === "Products"
              ? serviceDropdownsecond  : item.title === "Sports"  ? serviceDropdowthird
              : item.title === "Home"  ? serviceDropdownHome : [];
              const isServices = item.title === "Services"
          return (
            <li
              key={item.id}
              className={item.cName}
              onMouseEnter={() => handleMouseEnter(dropdownItems)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <Link to={item.path}>{item.title}</Link>
              {openSubMenu && currentDropdown === dropdownItems && (
                <Dropdown  dropdownItems={dropdownItems}
                  isServices={isServices}
                />
              )}
            </li>
          );
        })}
      </ul> */
    // }
    // import {navItems,serviceDropdown,serviceDropdownsecond,serviceDropdownHome,serviceDropdowthird} from './NavbarItems'




// import React, { useState } from "react";
// import Dropdown from "./Dropdown";
// import "./Navbar.css";
// import { FaTree } from "react-icons/fa";
// import Button from "./Button";
// import {navItems,serviceDropdown,serviceDropdownsecond,serviceDropdownHome,serviceDropdowthird} from './NavbarItems'
// import {Link} from 'react-router-dom'
// const Navbar = () => {
//   const [openSubMenu, setOpenSubMenu] = useState(false);
//   const [currentDropdown, setCurrentDropdown] = useState([]);
//   const handleMouseEnter = (dropdown) => {
//     setCurrentDropdown(dropdown);
//     setOpenSubMenu(true);
//   };
//   const handleMouseLeave = () => {
//     setCurrentDropdown([]);
//     setOpenSubMenu(false);
//   };
//   return (
//     <div>
//     <nav className="navbar">
//        <Link to="/" className="navbar-logo">  NATURE <FaTree /> </Link>
//         <ul className="nav-items">
//         {navItems.map((item) => {
//           const dropdownItems =
//             item.title === "Services"   
//             ? serviceDropdown  : item.title === "Products"
//             ? serviceDropdownsecond  : item.title === "Sports"  
//             ? serviceDropdowthird  : item.title === "Home"  
//             ? serviceDropdownHome : [];
//               const isServices = item.title === "Services"
//           return (
//             <li
//               key={item.id}
//               className={item.cName}
//               onMouseEnter={() => handleMouseEnter(dropdownItems)}
//               onMouseLeave={() => handleMouseLeave()}
//             >
//               <Link to={item.path}>{item.title}</Link>
//               {openSubMenu && currentDropdown === dropdownItems && (
//                 <Dropdown  dropdownItems={dropdownItems}
//                   isServices={isServices}
//                 />
//               )}
//             </li>
//           );
//         })}
//       </ul> 
//       <Button />
//     </nav>
//     </div>
//   );
// };
// export default Navbar;

// import React, { useState } from "react";
// import Dropdown from "./Dropdown";
// import "./Navbar.css";
// import { FaTree } from "react-icons/fa";
// import Button from "./Button";
// import { navItems } from './NavbarItems';
// import { Link } from 'react-router-dom';
// import Header from "./Header";
// const Navbar = (props) => {
//   const [openSubMenu, setOpenSubMenu] = useState(false);
//   const [currentDropdown, setCurrentDropdown] = useState([]);

//   const handleMouseEnter = (dropdown) => {
//     setCurrentDropdown(dropdown);
//     setOpenSubMenu(true);
//   };

//   const handleMouseLeave = () => {
//     setCurrentDropdown([]);
//     setOpenSubMenu(false);
//   };
//   const getDropdownClass = (title) => {
//     switch (title) {
//       case "Services":
//         return "services-submenus";
//       case "Home":
//         return "Home-item";
//       case "Products":
//         return "products-item";
//       case "Sports":
//         return "contect-us-first";
//       default:
//         return "";
//     }
//   };
//   return (
//     <div>
//       <nav className="navbar">
//         {/* <Link to="/" className="navbar-logo">NATURE <FaTree />
//         </Link> */}
//         <Header />
//         <ul className="nav-items">
      
//           {navItems.map((item) => {
//             const dropdownClass = getDropdownClass(item.title);
//             return (
//               <li
//                 key={item.id}
//                 className={item.cName}
//                 onMouseEnter={() => handleMouseEnter(item.childrens)}
//                 onMouseLeave={handleMouseLeave}
                
//               >
//                 <Link to={item.path}>{item.title}</Link>
//                 {((item.title === "Services" || item.title === "Products") && openSubMenu && currentDropdown === item.childrens && item.childrens) && (
//                   <Dropdown dropdownItems={item.childrens} dropdownClass={dropdownClass} />
//                 )}
//               </li>
//             );
//           })}
          
//         </ul>
//         <Button />
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import Dropdown from "./Dropdown";
// import "./Navbar.css";
// import { FaTree } from "react-icons/fa";
// import Button from "./Button";
// import { navItems } from './NavbarItems';
// import { Link } from 'react-router-dom';
// import Header from "./Header";
// const Navbar = (props) => {
//   const [openSubMenu, setOpenSubMenu] = useState(false);
//   const [currentDropdown, setCurrentDropdown] = useState([]);

//   const handleMouseEnter = (dropdown) => {
//     setCurrentDropdown(dropdown);
//     setOpenSubMenu(true);
//   };

//   const handleMouseLeave = () => {
//     setCurrentDropdown([]);
//     setOpenSubMenu(false);
//   };
 
//   return (
//     <div>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo">NATURE <FaTree />
//         </Link>
       
        
//         <Button />
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

 // <div>
    //   <nav className="navbar">
    //     <Header />
    //     <NavbarComponent {...data}/>
    //     <Button />
    //   </nav>
    // </div>



// import { Navbar, Container, Nav } from 'react-bootstrap';

// import React from "react";
// import "./Navbar.css";
// import Button from "./Button";
// import Header from "./Header";
// import NavbarComponent from "./NavbarComponent";
// const NavbarCom = (props) => {
//   const data = props;

//   return (
   
//     <div className='navbar'>
//       <Navbar collapseOnSelect expand="lg" bg="dark"  variant="light" >
//         <Container>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler fixed-toggler"/>
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="dropdown mt-5 ">
//               <Header />
//               <NavbarComponent {...data} />
//               <Button />
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
  
//   );
// };
// export default NavbarCom;




import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import './Dropdown.css'
import "./Navbar.css";
import Button from "./Button";
import Header from "./Header";
import NavbarComponent from "./NavbarComponent";

  
const NavbarCom = (props) => {
  const data = props;
  return (
    <div className='navbar'>
    <Navbar  collapseOnSelect  expand="lg"  bg="dark"  variant="light" >
      <Container >
        <Navbar.Toggle  aria-controls="responsive-navbar-nav"  className={`custom-toggler fixed-toggler `}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="dropdown mt-5">
              <div className="offcanvas-menu">
                <Header />
                <NavbarComponent {...data} />
                <Button />
              </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  </div>
  );
};

export default NavbarCom;

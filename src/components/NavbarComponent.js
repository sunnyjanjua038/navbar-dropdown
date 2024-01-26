
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const NavbarComponent = (props) => {
  const { data} = props;
  const navItems = data;
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState([]);
  

  const handleMouseEnter = (dropdown) => {
    setCurrentDropdown(dropdown);
    setOpenSubMenu(true);
  };

  const handleMouseLeave = () => {
    setCurrentDropdown([]);
    setOpenSubMenu(false);
  };

  return (
    <div>
      <ul className="nav-items">
      {navItems?.map((item) => {
        return (
          <li key={item.id} className={item.cName}  onMouseEnter={() => handleMouseEnter(item.childrens)}
          onMouseLeave={handleMouseLeave}>
            <Link to={item.path}>{item.title}</Link>
            { openSubMenu && currentDropdown === item.childrens  && (
              <Dropdown dropdownItems={item.childrens}  />
            )}
          </li>
        );
      })}
      
    </ul>
    </div>
  )
}

export default NavbarComponent

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from './Dropdown';

// const NavbarComponent = (props) => {
//   const { data } = props;
//   const navItems = data;
//   const [openSubMenu, setOpenSubMenu] = useState(false);
//   const [currentDropdown, setCurrentDropdown] = useState(null);
//   const [open, setOpen] = useState('1');

//   const toggle = (id) => {
//     setOpen(open !== id ? id : null);
//   };

//   const handleMouseEnter = (dropdown) => {
//     setCurrentDropdown(dropdown);
//     setOpenSubMenu(true);
//   };

//   const handleMouseLeave = () => {
//     setCurrentDropdown(null);
//     setOpenSubMenu(false);
//   };

//   return (
//     <div>
//       <ul className="nav-items">
//         {navItems?.map((item) => (
//           <li
//             key={item.id}
//             className={item.cName}
//             onMouseEnter={() => handleMouseEnter(item.childrens)}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => toggle(item.id)}
//           >
//             <Link to={item.path}>{item.title}</Link>
//             {openSubMenu && currentDropdown === item.childrens && open === item.id && (
//               <Dropdown dropdownItems={item.childrens} />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NavbarComponent;

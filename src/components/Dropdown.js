// import React, { useState } from "react";
// import { serviceDropdown } from "./NavbarItems";
// import { Link } from "react-router-dom";
// import "./Dropdown.css";

// const Dropdown = () => {
//     const [devepment, setDevelopment] = useState(false);
//   return (
//       <>
//       <ul
//         className={devepment ? "services-submenu clicked" : "services-submenu"}
//         onClick={() => setDevelopment(!devepment)}
//       >
//         {serviceDropdown.map((item) => {
//           return (
//             <li key={item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDevelopment(false)}
//               >
                
//                 {item.title}
               
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </> 
   
//   )
// }

// export default Dropdown


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { serviceDropdown } from "./NavbarItems";
// import "./Dropdown.css";

// const Dropdown = () => {
//   const [subMenuOpen, setSubMenuOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const handleMouseEnter = (service) => {
//     setSelectedService(service);
//     setSubMenuOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setSelectedService(null);
//     setSubMenuOpen(false);
//   };
 
//   return (
//     <ul className={"services-submenus"} onMouseLeave={handleMouseLeave}>
//       {serviceDropdown.map((service) => (
//         <li key={service.id} onMouseEnter={() => handleMouseEnter(service)}>
//           <Link to={service.path} className={service.cName}>
//             {service.title}
//           </Link>
//           {subMenuOpen && selectedService === service && service.childrens && (
//             // "Services" ? "sub-menu" : "products-sub-menu"
//             <ul className={"sub-menu"}>
//               {service.childrens.map((childItem) => (
//                 <li key={childItem.id}>
//                   <Link to={childItem.path} className={childItem.cName}>
//                     {childItem.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Dropdown;


    // <ul className= {
    //   isServices ? "services-submenus" : 
    //   (dropdownItems === serviceDropdowthird ? "contect-us-first"  : (dropdownItems === serviceDropdownHome ? "Home-item" : "products-item"))
    // } onMouseLeave={handleMouseLeave}>
    //   {dropdownItems.map((service) => (
    //     <li key={service.id} onMouseEnter={() => handleMouseEnter(service)}>
    //       <Link to={service.path} className={service.cName}>
    //         {service.title}
    //       </Link>
    //       {subMenuOpen && selectedService === service && service.childrens && (
    //         <ul className={isServices ? "sub-menu" :(dropdownItems === serviceDropdowthird ? 'contect-us-sub' :(dropdownItems === serviceDropdownHome ? 'sub-home-item' :"products-sub-menu"))}>
    //           {service.childrens.map((childItem) => (
    //             <li key={childItem.id}>
    //               <Link to={childItem.path} className={childItem.cName}>
    //                 {childItem.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </li>
    //   ))}
    
    // </ul>
  


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Dropdown.css";
// import {serviceDropdowthird ,serviceDropdownHome } from "./NavbarItems";

// const Dropdown = (props) => {
//   const {dropdownItems,isServices} = props;
//   const [subMenuOpen, setSubMenuOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const handleMouseEnter = (service) => {
//     setSelectedService(service);
//     setSubMenuOpen(true);
//   };
//   const handleMouseLeave = () => {
//     setSelectedService(null);
//     setSubMenuOpen(false);
//   };
//   return (
//     <div>
//      <ul className= {
//       isServices ? "services-submenus" : 
//       (dropdownItems === serviceDropdowthird ? "contect-us-first"  : (dropdownItems === serviceDropdownHome ? "Home-item" : "products-item"))
//     } onMouseLeave={handleMouseLeave}>
//       {dropdownItems.map((service) => (
//         <li key={service.id} onMouseEnter={() => handleMouseEnter(service)}>
//           <Link to={service.path} className={service.cName}>
//             {service.title}
//           </Link>
//           {subMenuOpen && selectedService === service && service.childrens && (
//             <ul className={isServices ? "sub-menu" :(dropdownItems === serviceDropdowthird ? 'contect-us-sub' :(dropdownItems === serviceDropdownHome ? 'sub-home-item' :"products-sub-menu"))}>
//               {service.childrens.map((childItem) => (
//                 <li key={childItem.id}>
//                   <Link to={childItem.path} className={childItem.cName}>
//                     {childItem.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
    
//     </ul>
  
//     </div>
//   );
// };

// export default Dropdown;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import SubMenuItem from "./SubMenuItem";


const Dropdown = ({ dropdownItems}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = (item) => {
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };


  return (
    <div >
      <ul  className="dropdowns">
        {dropdownItems.map((item) => (
          <li key={item.id}  onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave} >
            <Link to={item.path} className={item.cName} >
              {item.title}
            </Link>
            <SubMenuItem selectedItem={selectedItem} item={item}/> 
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Dropdown.css";
// import SubMenuItem from "./SubMenuItem";

// const Dropdown = ({ dropdownItems }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleClick = (item) => {
//     setSelectedItem(selectedItem === item ? null : item);

//   };
//   const handleMouseEnter = (item) => {
//     setSelectedItem(item);
//   };

//   const handleMouseLeave = () => {
//     setSelectedItem(null);
//   };


//   return (
//     <div>
//       <ul className="dropdowns">
//         {dropdownItems.map((item) => (
//           <li
//             key={item.id}
//             onMouseEnter={() => handleMouseEnter(item)}
//           onMouseLeave={handleMouseLeave}
//             onClick={() => handleClick(item)}
//             className={selectedItem === item ? "active" : ""}
//           >
//             <Link to={item.path} className={item.cName}>
//               {item.title}
//             </Link>
//             <SubMenuItem selectedItem={selectedItem} item={item}  />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;

// import React from 'react'
// import { Link } from 'react-router-dom'
// const SubMenuItem = (props) => {
//   const {subMenuOpen,selectedService, isServices, service,dropdownItems ,serviceDropdowthird,serviceDropdownHome } = props;
//   return (
//     <div>
//         {subMenuOpen && selectedService === service && service.childrens && (
//             <ul className={isServices ? "sub-menu"
//             :(dropdownItems === serviceDropdowthird ? 'contect-us-sub' 
//             :(dropdownItems === serviceDropdownHome ? 'sub-home-item'
//             :"products-sub-menu"))}>
//             {service.childrens.map((childItem) => (
//                 <li key={childItem.id}>
//                   <Link to={childItem.path} className={childItem.cName}>
//                     {childItem.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//     </div>
//   )
// }

// export default SubMenuItem


import { Link } from 'react-router-dom'
import React from 'react'

const SubMenuItem = (props) => {
  const {selectedItem,item} = props 
  return (
    <div>
      {selectedItem === item && item.subchildrens && (
              <ul className= 'submenu'>
                {item.subchildrens.map((subItem) => (
                  <li key={subItem.id}>
                    <Link to={subItem.path} className={subItem.cName}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
    </div>
  )
}

export default SubMenuItem

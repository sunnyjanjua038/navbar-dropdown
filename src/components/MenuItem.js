import React from 'react'
import { Link } from 'react-router-dom';
import {serviceDropdowthird ,serviceDropdownHome } from "./NavbarItems";
import SubMenuItem from './SubMenuItem';
const MenuItem = (props) => {
  const {isServices, dropdownItems,handleMouseLeave
    ,handleMouseEnter,subMenuOpen,selectedService} = props;
  return (
    <div>
       <ul className= {
      isServices ? "services-submenus" : 
      (dropdownItems === serviceDropdowthird ? "contect-us-first"  : 
      (dropdownItems === serviceDropdownHome ? "Home-item" : "products-item"))
    } onMouseLeave={handleMouseLeave}>
      {dropdownItems.map((service) => (
        <li key={service.id} onMouseEnter={() => handleMouseEnter(service)}>
          <Link to={service.path} className={service.cName}> {service.title}</Link>
          

          
          <SubMenuItem subMenuOpen={subMenuOpen} selectedService={selectedService}
          isServices={isServices} dropdownItems={dropdownItems}
          serviceDropdowthird={serviceDropdowthird} serviceDropdownHome={serviceDropdownHome} 
          service={service}/>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default MenuItem


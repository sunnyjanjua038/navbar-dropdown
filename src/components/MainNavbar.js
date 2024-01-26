import React from 'react'
import { Link } from 'react-router-dom'

import Dropdown from './Dropdown'
import SubMenuItem from './SubMenuItem'
const MainNavbar = (props) => {
    const {handleMouseEnter , handleMouseLeave, dropdownItems,openSubMenu,currentDropdown,item} = props
    const isServices = item.title === "Services"
  return (
    <div>
          <li
              key={item.id} className={item.cName} 
              onMouseEnter={() => handleMouseEnter(dropdownItems)}
              onMouseLeave={() => handleMouseLeave()}>
              <Link to={item.path} >{item.title} 

              </Link>
              {openSubMenu && currentDropdown === dropdownItems && (
                <Dropdown  dropdownItems={dropdownItems}
                  isServices={isServices} />
              )}
            </li>
    </div>
  )
}

export default MainNavbar
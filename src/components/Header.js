import React from 'react'
import { Link } from 'react-router-dom'
import { FaTree } from "react-icons/fa";
import "./Navbar.css";
const Header = () => {
  return (
    <div>
            <Link to="/" className="navbar-logo">  NATURE <FaTree /> </Link>

    </div>
  )
}

export default Header

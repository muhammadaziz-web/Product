import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SiteLogo from '../../images/site_logo.svg'
import '../Navbar/Navbar.css'
import DarkLight from "../../images/DarkLight.png"

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const WhiteDarkMode = () => {
    const rootElement = document.documentElement;
    if(isDarkMode){
      rootElement.classList.remove('dark')
    }
    else{
      rootElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
  }
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
      setIsMenu((prevState) => !prevState);
  };

  return (
    <div>
      <nav className='siteNav'>
        <div className="container">
          <NavLink to="/" className='SiteNavLogo'>
            <img src={SiteLogo} alt="SiteLogo" /> <span>Product</span>
          </NavLink>
            <div className={isMenu ? "mediaBox active" : "mediaBox"}>
            <ul>
              <li className='natActive' onClick={toggleMenu}>
                <button>
                  <i class='bx bx-x'></i>
                </button>
              </li>
              <li>
                <NavLink style={({ isActive }) => ({
                      fontWeight: isActive ? "700" : "400"
                  })} to="/" >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => ({
                      fontWeight: isActive ? "700" : "400"
                  })} to="/customers" >
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => ({
                      fontWeight: isActive ? "700" : "400"
                  })} to="/pricing" >
                  Pricing  
                </NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => ({
                      fontWeight: isActive ? "700" : "400"
                  })} to="/resources" >
                    Resources  
                </NavLink>
              </li>
            </ul>
            <div className="btnBox">
              <NavLink to="/signin">
                Sign In
              </NavLink>
              <NavLink>
                Sign Up
              </NavLink>
            </div>
            </div>
          <div className="DarkWhite">
            <button id='menu' onClick={toggleMenu}>
                <i class='bx bx-menu'></i>
            </button>
            <button className='DarkWhiteBtn' onClick={WhiteDarkMode}>
              <img src={DarkLight} alt="DarkLight" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

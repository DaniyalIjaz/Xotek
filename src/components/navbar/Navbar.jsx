
import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'

const Navbar = () => {

  const [isOpen, setIsOpen]= useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  };
  

  return (
    <motion.div className='navMain glass'
                variants={fadeIn('right',0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
    >

{/* NavLogo  */}
      <div className='navLogo' >
        <NavLink to="/">
          <img src="./Images/logo/xotek-logo.avif" alt="Xotek Logo" />
        </NavLink>
      </div>

{/* NavLinks  */}
      <ul className={isOpen ? 'navItemsActive' : 'navItems'}>
        <li>
        <NavLink 
  className={({ isActive }) => {
    return isActive ? "text-red" : "";
  }} 
  to="/"
>
  Home
</NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "text-red" : "")} 
            to="/about-multynet"
          >
            Servives
          </NavLink>
          <div className="dropdown">
            <NavLink className="dropdownLink" to="/company-profile">
              Company Profile
            </NavLink>
            <NavLink className="dropdownLink" to="/company-culture">
              Company Culture
            </NavLink>
            <NavLink className="dropdownLink" to="/video-center">
              Video Center
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "text-red" : "")} 
            to="/product"
          >
            Work
          </NavLink>
          <div className="dropdown">
            <NavLink className="dropdownLink" to="/home-entertainment">
              Home Entertainment
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "text-red" : "")} 
            to="/news"
          >
            Why xotek
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "text-red" : "")} 
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>

{/* Hamburger  */}

        {/* <div id="menuToggle" className='hamburger'  onClick={toggleMenu}>
                <input id="checkbox" type="checkbox"/>

                <label className="toggle" htmlFor="checkbox">
                    <div className="bar bar--top"></div>
                    <div className="bar bar--middle"></div>
                    <div className="bar bar--bottom"></div>
                </label>
        </div> */}

<div className='hamburger'>
        <input 
          id="checkbox" 
          type="checkbox" 
          checked={isOpen} 
          onChange={toggleMenu} // Use onChange instead of onClick
        />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>

        
</motion.div>

  );
};

export default Navbar;


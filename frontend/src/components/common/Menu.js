import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import LanguageSwitcher from "../layout/LanguageSwitcher";
import DarkModeToggle from "../layout/DarkModeToggle";

import Socials from "./Socials"

// CSS for the menu
import "../../styles/components/menu.css";

const Menu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);

  // Close the menu if a click is detected outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div ref={menuRef} className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>

      <div className="menu-extras">
        <LanguageSwitcher />
        <DarkModeToggle />

        <Socials />
      </div>
    </div>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;

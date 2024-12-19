import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from "../layout/LanguageSwitcher";
import DarkModeToggle from "../layout/DarkModeToggle";

import Socials from "./Socials"

// CSS for the menu
import "../../styles/components/menu.css";

const Menu = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();

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
        <li><a href="home" onClick={toggleMenu}>{t('components.menu.urls.home')}</a></li>
        <li><a href="about" onClick={toggleMenu}>{t('components.menu.urls.about')}</a></li>
        <li><a href="contact" onClick={toggleMenu}>{t('components.menu.urls.contact')}</a></li>
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

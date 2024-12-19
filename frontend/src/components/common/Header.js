import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Menu from './Menu'; 

// CSS for the header page
import "../../styles/components/header.css";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (isOpen) => setMenuOpen(isOpen);

  return (
    <header>
      <img src="https://placehold.co/50x50" alt="Logo" />
      <h1>{t('components.header.head')}</h1>

      {/* Toggle icon (hamburger or X) */}
      <i 
        className={`fa-solid ${isMenuOpen ? 'fa-x' : 'fa-bars'} fa-xl`} 
        onClick={handleMenuToggle} 
        role="button" 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      ></i>

      {/* Pass the menu open state and toggle handler */}
      <Menu isOpen={isMenuOpen} toggleMenu={handleMenuToggle} />
    </header>
  );
};

export default Header;

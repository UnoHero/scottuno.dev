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
    <>
      <header>
        <img src="https://placehold.co/50x50" alt="Logo" />
        <h1>{t('header.head')}</h1>

      </header>
      {/* Burger menu */}
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;

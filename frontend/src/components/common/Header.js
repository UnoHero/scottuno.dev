import React from 'react';
import { useTranslation } from 'react-i18next';

// CSS for the header page
import "../../styles/components/header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <img src='https://placehold.co/50x50' alt='Logo'></img>
      <h1>{t('header.head')}</h1>
      <i class="fa-solid fa-bars fa-2xl"></i>
    </header>
  );
}

export default Header;
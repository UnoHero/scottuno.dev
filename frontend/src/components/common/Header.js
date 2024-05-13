import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../layout/LanguageSwitcher";

import DarkModeToggle from "../layout/DarkModeToggle";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <h1>{t('header.head')}</h1>
      <LanguageSwitcher />
      <DarkModeToggle />
    </header>
  );
}

export default Header;

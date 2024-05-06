import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../layout/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>

      <LanguageSwitcher />
    </header>
  );
}

export default Header;

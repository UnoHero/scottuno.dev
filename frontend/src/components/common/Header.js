import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../layout/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">{t('header.home')}</a></li>
          <li><a href="/portfolio">{t('header.portfolio')}</a></li>
          <li><a href="/cv">{t('header.cv')}</a></li>
          <li><a href="/contact">{t('header.contact')}</a></li>
        </ul>
      </nav>
      <LanguageSwitcher /> {/* Include LanguageSwitcher here */}
    </header>
  );
}

export default Header;

import React, {useEffect} from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from "../layout/LanguageSwitcher";
import DarkModeToggle from "../layout/DarkModeToggle";
import Socials from "./Socials";

// CSS for the menu
import "../../styles/components/menu.css";

const Menu = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();

  const menuRef = useRef(null);

  // Close the menu if a click is detected outside of it
  useEffect(() => {
    document.body.style.overflw = isOpen ? "hidden" : "auto";
  }, [isOpen])

  return (
    <BurgerMenu
      isOpen={isOpen}
      onStateChange={(state) => toggleMenu(state.isOpen)}
      right
      customBurgerIcon={<i className="fa-solid fa-bars fa-xl" />}

    >
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
    </BurgerMenu>
  );
};

export default Menu;

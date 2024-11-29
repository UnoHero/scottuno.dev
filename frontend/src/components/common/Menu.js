import React, {useEffect} from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';

import LanguageSwitcher from "../layout/LanguageSwitcher";
import DarkModeToggle from "../layout/DarkModeToggle";
import Socials from "./Socials";

// CSS for the menu
import "../../styles/components/menu.css";

const Menu = ({ isOpen, toggleMenu }) => {

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
        <li><a href="#home" onClick={() => toggleMenu(false)}>Home</a></li>
        <li><a href="#about" onClick={() => toggleMenu(false)}>About</a></li>
        <li><a href="#contact" onClick={() => toggleMenu(false)}>Contact</a></li>
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

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {
  LogoGridItemMobile,
  MenuGridItemMobile,
  NavbarGridMobile,
} from "../../CSS/mobileCSS";
import styles from "./../../../../CSS/GlobalCSS/fontGlobal.module.css";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function NavbarMobileView() {
  return (
    <NavbarGridMobile>
      <LogoGridItemMobile>
        <div className={styles.font}>Stuff Share App</div>
      </LogoGridItemMobile>
      <MenuGridItemMobile>
        <FontAwesomeIcon icon={faBars} />
      </MenuGridItemMobile>
    </NavbarGridMobile>
  );
}

export default NavbarMobileView;

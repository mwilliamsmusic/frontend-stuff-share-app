import React from "react";
import {
  LogoContainer,
  LinkStyle,
  FlexboxContainer,
  FlexboxItem,
  FlexboxItemSpacer,
} from "../navbarCSS";
import {Link} from "react-router-dom";
import styles from "../../../CSS/fontGlobal.module.css";

function NavbarUnauth() {
  return (
    <FlexboxContainer>
      <LogoContainer>
        <div className={styles.font}>Stuff Share App</div>
      </LogoContainer>

      <FlexboxItem>
        <LinkStyle to="/main/collect">Collections </LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <LinkStyle to="/main/fave">Favorites</LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <Link to="/signin">Sign In</Link>
      </FlexboxItem>

      <FlexboxItem>
        <Link to="/signup">Sign Up</Link>
      </FlexboxItem>
      <FlexboxItemSpacer />
    </FlexboxContainer>
  );
}

export default NavbarUnauth;

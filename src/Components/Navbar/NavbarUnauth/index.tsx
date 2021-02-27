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
import {mainCollect, signIn, signUp} from "../../../Utils/URL/reactURL";

function NavbarUnauth() {
  return (
    <FlexboxContainer>
      <LogoContainer>
        <div className={styles.font}>Stuff Share App</div>
      </LogoContainer>

      <FlexboxItem>
        <LinkStyle to={mainCollect}>Collections</LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <Link to={signIn}>Sign In</Link>
      </FlexboxItem>

      <FlexboxItem>
        <Link to={signUp}>Sign Up</Link>
      </FlexboxItem>
      <FlexboxItemSpacer />
    </FlexboxContainer>
  );
}

export default NavbarUnauth;

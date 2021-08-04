import React from "react";
import {
  LogoContainer,
  LinkStyle,
  FlexboxItem,
  UnauthLargeDisplay,
  NavFlexContainer,
} from "../navbarCSS";
import {Link} from "react-router-dom";
import styles from "../../../CSS/GlobalCSS/fontGlobal.module.css";
import {mainCollect, signIn, signUp} from "../../../Utils/URL/frontURL";

function NavUnauthView() {
  return (
    <NavFlexContainer>
      <LogoContainer>
        <div className={styles.font}>Stuff Share App</div>
      </LogoContainer>
      <UnauthLargeDisplay>
        <FlexboxItem>
          <LinkStyle to={mainCollect}>Collections</LinkStyle>
        </FlexboxItem>
      </UnauthLargeDisplay>
      <UnauthLargeDisplay>
        <FlexboxItem>
          <Link to={signIn}>Sign In</Link>
        </FlexboxItem>
      </UnauthLargeDisplay>
      <UnauthLargeDisplay>
        <FlexboxItem>
          <Link to={signUp}>Sign Up</Link>
        </FlexboxItem>
      </UnauthLargeDisplay>
    </NavFlexContainer>
  );
}

export default NavUnauthView;

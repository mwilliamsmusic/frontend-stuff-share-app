import React from "react";
import {
  LogoContainer,
  LinkStyle,
  FlexboxItem,
  NavFlexContainer,
} from "../navbarCSS";
import styles from "../../../CSS/GlobalCSS/fontGlobal.module.css";
import AuthModal from "../../Navbar/NavbarAuthView/AuthModal";
import {mainCollect} from "../../../Utils/URL/frontURL";

interface Props {
  logout: () => void;
}

function NavbarAuthView(props: Props) {
  return (
    <NavFlexContainer>
      <LogoContainer>
        <div className={styles.font}>Stuff Share App</div>
      </LogoContainer>

      <FlexboxItem>
        <LinkStyle to={mainCollect}>Collections</LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <AuthModal logout={props.logout} />
      </FlexboxItem>
    </NavFlexContainer>
  );
}

export default NavbarAuthView;

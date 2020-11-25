import React, {FC} from "react";
import {
  LogoContainer,
  LinkStyle,
  FlexboxContainer,
  FlexboxItem,
  FlexboxItemSpacer,
} from "../navbarCSS";
import styles from "../../../CSS/fontGlobal.module.css";
import AuthModal from "../AuthModal";

interface Props {
  logout: () => void;
}

const NavbarAuthDisplay: FC<Props> = ({logout}) => {
  return (
    <FlexboxContainer>
      <LogoContainer>
        <div className={styles.font}>Stuff Share App</div>
      </LogoContainer>

      <FlexboxItem>
        <LinkStyle to="/main/collect">Collections</LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <LinkStyle to="/main/fave">Favorites</LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <AuthModal logout={logout} />
      </FlexboxItem>

      <FlexboxItemSpacer />
    </FlexboxContainer>
  );
};

export default NavbarAuthDisplay;

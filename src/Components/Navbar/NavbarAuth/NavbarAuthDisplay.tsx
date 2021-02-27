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
import {mainCollect} from "../../../Utils/URL/reactURL";

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
        <LinkStyle to={mainCollect}>Collections</LinkStyle>
      </FlexboxItem>

      <FlexboxItem>
        <AuthModal logout={logout} />
      </FlexboxItem>

      <FlexboxItemSpacer />
    </FlexboxContainer>
  );
};

export default NavbarAuthDisplay;

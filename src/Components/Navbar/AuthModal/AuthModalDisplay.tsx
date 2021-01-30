import React from "react";
import {StdBtn} from "../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../CSS/IGlobalCSS";
import {
  AuthModalContainer,
  AuthLinkStyle,
  LinkBox,
  ModalTextSpacer,
} from "../navbarCSS";

interface Props {
  logout: () => void;
}

function AuthModalDisplay(props: Props) {
  return (
    <AuthModalContainer>
      <LinkBox>
        <AuthLinkStyle to="/all/user/collect">My Collections</AuthLinkStyle>
        <ModalTextSpacer />
        <AuthLinkStyle to="/user/fave/:id">My Favorites</AuthLinkStyle>
        <ModalTextSpacer />
        <AuthLinkStyle to="/user/me">Me</AuthLinkStyle>
        <ModalTextSpacer />

        <StdBtn bgColor={BLUE} brdColor={PINK} onClick={props.logout}>
          Sign Out
        </StdBtn>
      </LinkBox>
    </AuthModalContainer>
  );
}

export default AuthModalDisplay;

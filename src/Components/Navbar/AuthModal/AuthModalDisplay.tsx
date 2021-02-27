import React from "react";
import {StdBtn} from "../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../CSS/ITGlobalCSS";
import {userCollect} from "../../../Utils/URL/reactURL";
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
        <AuthLinkStyle to={userCollect}>My Collections</AuthLinkStyle>
        <ModalTextSpacer />

        <AuthLinkStyle to="/u/me">Me</AuthLinkStyle>
        <ModalTextSpacer />

        <StdBtn bgColor={BLUE} brdColor={PINK} onClick={props.logout}>
          Sign Out
        </StdBtn>
      </LinkBox>
    </AuthModalContainer>
  );
}

export default AuthModalDisplay;

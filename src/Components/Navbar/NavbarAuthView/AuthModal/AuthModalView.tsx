import React from "react";
import {StdBtn} from "../../../../CSS/buttonsCSS";

import {BLUE, PINK} from "../../../../CSS/GlobalCSS/typesGlobalCSS";

import {collectUser} from "../../../../Utils/URL/frontURL";
import {
  AuthModalContainer,
  AuthLinkStyle,
  LinkBox,
  ModalTextSpacer,
} from "../../navbarCSS";

interface Props {
  logout: () => void;
}

function AuthModalView(props: Props) {
  return (
    <AuthModalContainer>
      <LinkBox>
        <AuthLinkStyle to={collectUser}>My Collections</AuthLinkStyle>
        <ModalTextSpacer />

        <AuthLinkStyle to="/u/me">Me</AuthLinkStyle>
        <ModalTextSpacer />

        <StdBtn backgroundColor={BLUE} onClick={props.logout}>
          Sign Out
        </StdBtn>
      </LinkBox>
    </AuthModalContainer>
  );
}

export default AuthModalView;

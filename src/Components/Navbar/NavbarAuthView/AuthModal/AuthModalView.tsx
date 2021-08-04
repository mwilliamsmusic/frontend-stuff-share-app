import React from "react";
import {StdBtn} from "../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, PINK} from "../../../../CSS/GlobalCSS/typesGlobalCSS";

import {userCollect} from "../../../../Utils/URL/frontURL";
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
        <AuthLinkStyle to={userCollect}>My Collections</AuthLinkStyle>
        <ModalTextSpacer />

        <AuthLinkStyle to="/u/me">Me</AuthLinkStyle>
        <ModalTextSpacer />

        <StdBtn bgColor={BLUE} onClick={props.logout}>
          Sign Out
        </StdBtn>
      </LinkBox>
    </AuthModalContainer>
  );
}

export default AuthModalView;

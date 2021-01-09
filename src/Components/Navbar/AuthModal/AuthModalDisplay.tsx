import React, {FC} from "react";

import {
  AuthModalContainer,
  AuthLinkStyle,
  LinkBox,
  ModalTextSpacer,
} from "../navbarCSS";

interface Props {
  logout: () => void;
}

const AuthModalDisplay: FC<Props> = ({logout}) => {
  return (
    <AuthModalContainer>
      <LinkBox>
        <AuthLinkStyle to="/all/user/collect">My Collections</AuthLinkStyle>
        <ModalTextSpacer />
        <AuthLinkStyle to="/user/fave/:id">My Favorites</AuthLinkStyle>
        <ModalTextSpacer />
        <AuthLinkStyle to="/user/me">Me</AuthLinkStyle>
        <ModalTextSpacer />

        <button onClick={logout}>Sign Out</button>
      </LinkBox>
    </AuthModalContainer>
  );
};

export default AuthModalDisplay;

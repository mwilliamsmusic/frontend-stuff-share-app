import styled from "styled-components";
import {Link} from "react-router-dom";
export const LogoContainer = styled.div`
  font-size: 2rem;
  text-shadow: -2px 3px rgb(244, 43, 75);
  /*  grid-area: logo;*/
  padding-left: 50px;
  color: white;
  margin-right: auto;
`;

export const LinkStyle = styled(Link)`
  padding: 10px;
  color: white;

  text-decoration: none;
  &:hover {
    color: rgb(244, 43, 75);
    background: white;
    border-radius: 5px;
    height: 100%;

    border: 2px solid rgb(244, 43, 75);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const AuthModalContainer = styled.div`
  position: absolute;
  width: 150px;

  border: 2px solid rgb(244, 43, 75);
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);

  padding: 10px;
`;

export const AuthLinkStyle = styled(Link)`
  padding: 13px;

  color: rgb(244, 43, 75);
  width: 100%;

  /*background-image: linear-gradient(rgba(0, 0, 0 4), rgba(0, 0, 0 0.8));*/
  text-decoration: none;
  &:hover {
    color: #2c4ef5;
  }
`;

export const FlexboxContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #2c4ef5;
  position: fixed;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3)
  );
  /* border-bottom: 3px solid rgba(0, 0, 0, 0.2);*/
`;

export const FlexboxItem = styled.div`
  width: 100px;
`;

export const FlexboxItemSpacer = styled.div`
  width: 150px;
`;

export const LinkBox = styled.div`
  width: 100%;

  /*background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));*/
  &:hover {
    background-color: white;
  }
`;
export const MeBtn = styled.button`
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  background-color: rgb(244, 43, 75);
  padding: 10px;
  cursor: pointer;
`;

export const ModalTextSpacer = styled.div`
  height: 8px;
`;

export const Font = styled.div`
  font-family: Roboto, sans-serif;
`;

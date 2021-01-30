import {Link} from "react-router-dom";
import styled from "styled-components";

// Individual collect/item link
export const CollectContainer = styled.div`
  border: 2px solid rgb(244, 43, 75);
  height: 40px;
  width: 500px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ListStyle = styled.ul`
  list-style-type: none;
`;

export const LinkStyle = styled(Link)`
  padding: 10px;
  color: white;
  text-decoration: none;
  color: rgb(244, 43, 75);
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: black;
  z-index: 1000000;
`;

export const ModalCenterContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 100000;
`;

export const ModalPageContainer = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: whitesmoke;
  width: 80%;
  color: black;
  //box-shadow: 1px 33px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid #2c4ef5;
  z-index: 100000;
`;

export const TransOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

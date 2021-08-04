import styled from "styled-components";
import {Link} from "react-router-dom";
import {WHITE} from "./GlobalCSS/typesGlobalCSS";

export const ListContainer = styled.div`
  border: 2px solid rgb(244, 43, 75);
  height: 100px;
  width: 500px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 5px;
  //border-radius: 5px 20px 5px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "image title";
  align-items: center;
  overflow: hidden;
  margin: 10px;
  background-color: ${WHITE};
`;
export const GridImage = styled.div`
  grid-area: image;
  img {
    height: auto;

    width: 40%;
    // height: auto;
    object-fit: contain;
    border-radius: 5px;
    display: block;
  }
`;

export const LinkBtn = styled(Link)`
  height: 100%;
  width: 100%;
  color: white;
  text-decoration: none;
  color: rgb(244, 43, 75);
  margin: 0;
  padding: 0;
  border: 0;
`;

export const Icon = styled.div`
  border-radius: 50%;
  background-color: rgba(44, 78, 245, 1);
  background: linear-gradient(
    rgba(244, 43, 75, 1) 40%,
    rgba(244, 43, 75, 0.8),
    rgba(244, 43, 75, 0.5),
    rgba(44, 78, 245, 0.3)
  );
`;

export const FormList = styled.div`
  ul: {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li: {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

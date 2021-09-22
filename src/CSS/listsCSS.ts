import {Link} from "react-router-dom";
import styled from "styled-components";
import {BLUE, BORDER_RADIUS, GRADIENT, WHITE} from "./GlobalCSS/typesGlobalCSS";

export const StandardList = styled.div`
  box-sizing: border-box;
  border: none;
  padding: 0px;
  margin: 0px;
  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    padding: 0;
    list-style-type: none;
  }
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const GridStandardList = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  grid-template-rows: auto;
  align-items: center;
  overflow: hidden;
  background-color: ${BLUE};
  box-sizing: border-box;
  width: 100%;
  border: none;
  margin: -1px;
  border-radius: ${BORDER_RADIUS};
  @media only screen and (min-width: 768px) {
    border: 2px solid rgb(244, 43, 75);
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 10px;
  }
`;

export const StandardListGridBtn = styled(Link)`
  cursor: pointer;
  width: 100%;
  display: grid;
  text-decoration: none;
  color: rgb(244, 43, 75);
  margin-bottom: -1px;
  padding: 5px;
  border: none;
  background-color: ${WHITE};
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image data";
  box-sizing: border-box;
`;

export const ImageArea = styled.div`
  //width: 50%;
  border: none;
  box-sizing: border-box;

  img {
    height: auto;
    width: 100px;
    box-sizing: border-box;
    object-fit: contain;
    border-radius: 5px;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    border: none;
    box-sizing: border-box;
    grid-area: image;
    img {
      height: auto;
      width: 50%;
      box-sizing: border-box;
      object-fit: contain;
      border-radius: 5px;
      display: block;
    }
  }
`;

export const DataArea = styled.div`
  // width: 50%;
  border: none;
  box-sizing: border-box;
  word-wrap: break-word;
  @media only screen and (min-width: 768px) {
    width: 100%;
    grid-area: data;
  }
`;

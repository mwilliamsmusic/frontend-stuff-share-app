import {Link} from "react-router-dom";
import styled from "styled-components";
import {
  BLUE,
  BORDER_RADIUS,
  GRADIENT,
  PINK,
  WHITE,
} from "./GlobalCSS/typesGlobalCSS";

export const StandardList = styled.div`
  background-color: ${WHITE};
  border: none;
  padding: 0px;
  margin: 0px;
  ul {
    padding: 0px;
    list-style-type: none;
  }
  li {
    padding: 0px;
    list-style-type: none;
  }
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const GridStandardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: auto;
  align-items: center;
  overflow: hidden;
  background-color: ${WHITE};

  width: 100%;

  border-radius: ${BORDER_RADIUS};

  grid-template-columns: repeat(1, 1fr);
`;

export const StandardListGridBtn = styled(Link)`
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  display: grid;
  text-decoration: none;
  color: rgb(244, 43, 75);
  //margin-bottom: -1px;
  padding: 5px;
  //border: none;
  background-color: ${WHITE};
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image data";
  // box-sizing: border-box;

  border-radius: ${BORDER_RADIUS};
  align-items: center;
  border: 1px solid ${PINK};
`;

export const ImageArea = styled.div`
  width: 100%;
  border: none;
  box-sizing: border-box;
  grid-area: image;
  background-color: ${WHITE};
  img {
    height: auto;
    width: 25%;
    box-sizing: border-box;
    object-fit: contain;
    border-radius: 5px;
  }
`;

export const DataArea = styled.div`
  width: 100%;
  border: none;
  box-sizing: border-box;
  word-wrap: break-word;
  grid-area: data;
  background-color: ${WHITE};
`;

// Mobile    //////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const GridStandardListMobile = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  align-items: center;
  overflow: hidden;
  background-color: ${BLUE};
  width: 100%;
  border-radius: ${BORDER_RADIUS};
`;

export const StandardListGridBtnMobile = styled(Link)`
  cursor: pointer;
  display: grid;
  text-decoration: none;
  padding: 5px;
  background-color: ${WHITE};
  align-items: center;
  border: 1px solid ${PINK};
  img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    object-fit: contain;
    border-radius: 5px;
    display: block;
  }
`;

import styled from "styled-components";
import {BLUE, BORDER_RADIUS, WHITE} from "./GlobalCSS/typesGlobalCSS";

export const GridFormList = styled.div`
  padding: 0;
  display: grid;

  grid-column-gap: 1px;

  grid-template-columns: 1fr 1fr;
  grid-template-areas: "FLField FLValue";
  align-items: center;
  // grid-template-rows: auto;
  border: 1px solid ${BLUE};
  align-items: center;
  overflow: hidden;
  background-color: ${WHITE};
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  // margin: -1px;
  align-items: center;
  border-radius: ${BORDER_RADIUS};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
`;

export const FLFieldArea = styled.div`
  grid-area: FLField;
`;

export const FLValueArea = styled.div`
  grid-area: FLValue;
`;

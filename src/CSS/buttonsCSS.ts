import styled from "styled-components";
import {IBackgroundColor} from "./GlobalCSS/IGlobalCSS";
import {BLUE, PINK} from "./GlobalCSS/typesGlobalCSS";

const disabledOpacity: number = 0.6;

export const StdBtn = styled.button<IBackgroundColor>`
  border-radius: 4px;
  background-color: ${(p) => p.backgroundColor};
  color: white;
  margin: 5px;
  padding: 5px;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.05) 90%
  );
  /*
  :hover {
    transition: box-shadow 0.2s ease-in;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
  */
  :disabled {
    background-color: darkgrey;
    opacity: ${disabledOpacity};
    cursor: not-allowed;
  }
`;

export const SocialBtn = styled.button<IBackgroundColor>`
  background-color: ${(p) => p.backgroundColor};
  color: white;
  margin: 5px;
  padding: 5px;
  text-align: center;
  //  background: ${(p) => p.backgroundColor} padding-box,
  // linear-gradient(to right, ${PINK}, ${BLUE}) border-box;
  border-radius: 5px;
  //  border: 5px solid;
  border-style: none;
  cursor: pointer;
  :disabled {
    background-color: darkgrey;
    opacity: ${disabledOpacity};
    cursor: not-allowed;
  }
`;

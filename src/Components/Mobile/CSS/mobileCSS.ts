import styled from "styled-components";

import {BLUE, GOLD, PINK, WHITE} from "../../../CSS/GlobalCSS/typesGlobalCSS";

export const NavbarGridMobile = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "logo menu";
  display: grid;
`;

export const LogoGridItemMobile = styled.div`
  grid-area: logo;
  color: ${WHITE};
  margin-left: 8px;
`;

export const MenuGridItemMobile = styled.div`
  grid-area: menu;
  justify-self: end;
  margin-right: 8px;
`;

export const SearchMobile = styled.div`
  height: 25px;
  width: 100%;
  background-color: ${BLUE};
  color: ${WHITE};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
  input {
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, ${PINK}, ${BLUE}) border-box;
    border-radius: 5px;
    border: 2px solid transparent;
  }
`;

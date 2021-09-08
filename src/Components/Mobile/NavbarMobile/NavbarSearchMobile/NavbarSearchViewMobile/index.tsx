import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {
  GradientBoarder,
  LineBreak,
} from "../../../../../CSS/GlobalCSS/globalCSS";
import {GRADIENT} from "../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {SearchMobile} from "../../../CSS/mobileCSS";

function NavbarSearchViewMobile() {
  /*
    value={props.newField}
    onChange={(event) => {
      props.fieldHandler(event.target.value);
    }}*/
  return (
    <SearchMobile>
      <label htmlFor="search-form">
        <input type="text" id="search" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </label>
    </SearchMobile>
  );
}
export default NavbarSearchViewMobile;

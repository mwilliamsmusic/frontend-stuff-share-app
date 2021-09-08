import React, {Fragment} from "react";
import NavbarMobileView from "./NavbarMobileView";
import NavbarSearchViewMobile from "./NavbarSearchMobile/NavbarSearchViewMobile";

function NavbarMobile() {
  return (
    <Fragment>
      <NavbarMobileView />
      <NavbarSearchViewMobile />
    </Fragment>
  );
}

export default NavbarMobile;

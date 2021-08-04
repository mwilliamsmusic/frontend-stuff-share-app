import React, {Fragment} from "react";
import {CenterContent} from "../../CSS/GlobalCSS/globalCSS";

import {logLS} from "../../Utils/storageData";
import NavbarAuthView from "./NavbarAuthView";
import NavUnauthView from "./NavUnauthView";

function Navbar() {
  function logout() {
    window.location.href = process.env.FRONTEND;
    localStorage.clear();
  }
  const display = logLS ? (
    <NavbarAuthView logout={logout} />
  ) : (
    <NavUnauthView />
  );

  return <CenterContent>{display}</CenterContent>;
}

export default Navbar;

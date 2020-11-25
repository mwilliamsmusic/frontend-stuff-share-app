import React, {FC} from "react";
import axios from "axios";
import {getMe, frontend} from "./../../../Utils/urlCollect";
import NavbarAuthDisplay from "./NavbarAuthDisplay";

const NavbarAuth: FC = () => {
  // Logout user
  const logout = () => {
    window.location.href = frontend;
    localStorage.clear();
  };

  return (
    <div>
      <NavbarAuthDisplay logout={logout} />
    </div>
  );
};

export default NavbarAuth;

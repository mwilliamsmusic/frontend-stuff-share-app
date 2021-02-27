import React, {FC} from "react";
import axios from "axios";

import NavbarAuthDisplay from "./NavbarAuthDisplay";

const NavbarAuth: FC = () => {
  // Logout user
  const logout = () => {
    window.location.href = process.env.FRONTEND;
    localStorage.clear();
  };

  return (
    <div>
      <NavbarAuthDisplay logout={logout} />
    </div>
  );
};

export default NavbarAuth;

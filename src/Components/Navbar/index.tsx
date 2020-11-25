import React, {FC} from "react";
import NavbarAuth from "./NavbarAuth";
import NavbarUnauth from "./NavbarUnauth";
const Navbar: FC = () => {
  let display;
  const valid = localStorage.getItem("log");
  if (valid === "true") {
    display = <NavbarAuth />;
  } else {
    display = <NavbarUnauth />;
  }

  return display;
};

export default Navbar;

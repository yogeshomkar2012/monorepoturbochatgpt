import React from "react";
import Navbar from "../components/Navbar";
import { AUTH_ROUTES } from "../constants/routes.constants";
const publicLinks = [
  { label: "home", path: `${AUTH_ROUTES.HOME}` },
  { label: "about", path: `${AUTH_ROUTES.ABOUT}` },
  { label: "service", path: `${AUTH_ROUTES.SERVICE}` },
  { label: "contact", path: `${AUTH_ROUTES.CONTACT}` },
  { label: "Login", path: `${AUTH_ROUTES.LOGIN}` },
];
const NavbarContainer = () => {
  return <Navbar links={publicLinks} />;
};

export default NavbarContainer;

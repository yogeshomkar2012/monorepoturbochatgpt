import React from "react";

import { Link } from "react-router-dom";
import { AUTH_ROUTES } from "../constants/routes.constants";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 bg-primary text-white">
      <div className="flex ">
        <div>Logo img</div>
        <h1>Name brand</h1>
      </div>

      <nav className="">
        <Link to={AUTH_ROUTES.HOME}>Home</Link>
        <Link to={AUTH_ROUTES.ABOUT}>About</Link>
        <Link to={AUTH_ROUTES.SERVICE}>Service</Link>
        <Link to={AUTH_ROUTES.CONTACT}>Contact</Link>
        <Link to={AUTH_ROUTES.LOGIN}>Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;

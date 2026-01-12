import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = ({ links }) => {
  const baseLink = "capitalize py-1 rounded px-2 transition";
  const active = "text-primary font-semibold";
  const inactive = "text-white hover:text-primary";
  return (
    <header className="bg-warning">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">Home Kar Lo</div>
        <nav className="flex ">
          <ul className="hidden md:flex gap-6">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? active : inactive}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

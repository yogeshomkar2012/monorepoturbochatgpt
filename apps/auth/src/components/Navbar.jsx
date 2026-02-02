import { NavLink } from "react-router-dom";
import { Button } from "@repo/ui";
import { useState } from "react";

const Navbar = ({
  links = [],
  isMobileMenuOpen,
  onToggleMenuOpen,
  brandName,
  logo,
}) => {
  return (
    <>
      <div className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] sm:row-gap-2 sm:grid-cols-1  sm:justify-center sm:items-center md:h-15 sm:h-25 px-4">
        <div className="flex items-center  sm:justify-center  gap-8 md:gap-4 sm:p-2">
          <div className="h-10 rounded-full">
            <img className="h-full rounded-full" src={`${logo}`} />
          </div>
          <div className="text-primary  text-3xl font-semibold font-serif capitalize">
            {brandName}
          </div>
        </div>
        <div className=" md:justify-self-end sm:border-black  sm: sm:p-3 sm:justify-self-center ">
          <nav className="hidden sm:block ">
            <ul className={`grid  grid-cols-5 place-content-around gap-6`}>
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-center relative group  font-semibold uppercase "
                >
                  <NavLink
                    to={`${link.path}`}
                    className={({ isActive }) =>
                      `  hover:underline hover:underline-offset-8 decoration-primary text-text-white ${
                        isActive
                          ? "underline underline-offset-8 decoration-primary text-primary"
                          : ""
                      }`
                    }
                  >
                    <div className="flex gap-1 items-center justify-center ">
                      <span>
                        <link.icon size="20" />
                      </span>
                      {link.label}
                    </div>
                  </NavLink>

                  {/* child links */}
                  {link.children && (
                    <ul className="hidden group-hover:block  transition-all duration-700 easy-out absolute bg-green-background text-text-white w-52 -left-15    rounded-md ">
                      {link.children.map((child, i) => (
                        <li key={i}>
                          <NavLink
                            to={child.path}
                            className="hover:bg-hover-navgreen block m-1 p-2"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex sm:hidden justify-self-end">
            <Button
              onClick={onToggleMenuOpen}
              className="text-text-white text-2xl font-extrabold "
            >
              ☰
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <aside
          onClick={onToggleMenuOpen}
          className="bg-black md:hidden opacity-95 w-full h-full fixed top-0 left-0 z-100"
        >
          <div className="bg-warning w-full h-full">
            <div className="flex flex-col items-center justify-center bg-green-400 h-30">
              <div className="h-[50%]">
                <img className="h-full rounded-full" src={`${logo}`} />
              </div>
              <div className="p-2 capitalize font-serif text-primary font-semibold text-2xl">
                {brandName}
              </div>
            </div>

            <nav>
              <ul className="grid grid-rows-5">
                {links.map((link, index) => (
                  <li
                    onClick={onToggleMenuOpen}
                    key={index}
                    className="h-16 relative hover:bg-green-200 border-b border-white"
                  >
                    <NavLink
                      to={link.path}
                      onClick={onToggleMenuOpen}
                      className="flex cursor-pointer items-center justify-center font-semibold text-white hover:text-warning hover:transition hover:transform uppercase h-full w-full"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;

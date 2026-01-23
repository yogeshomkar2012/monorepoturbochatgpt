import { NavLink } from "react-router-dom";
import { Button } from "@repo/ui";

const Navbar = ({
  links = [],
  isMobileMenuOpen,
  onToggleMenuOpen,
  brandName,
  logo,
}) => {
  return (
    <>
      <div className=" grid justify-between md:grid-cols-2 grid-cols-[auto_1fr] items-center h-16 px-4">
        <div className="flex items-center gap-4">
          <div className="h-10 rounded-full">
            <img className="h-full rounded-full" src={`${logo}`} />
          </div>
          <div className="text-primary text-3xl font-semibold font-serif capitalize">
            {brandName}
          </div>
        </div>
        <div className=" max-w-lg justify-self-end ">
          <nav className="hidden md:block">
            <ul className="grid grid-cols-5  place-content-around gap-2  ">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-center  font-semibold uppercase"
                >
                  <NavLink
                    to={`${link.path}`}
                    className={({ isActive }) =>
                      `hover:underline hover:underline-offset-8 decoration-primary text-text-white ${
                        isActive
                          ? "underline underline-offset-8 decoration-primary text-primary"
                          : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden grid items-center justify-end ">
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
          className="  bg-black opacity-95 w-full h-full fixed inset-0 z-100"
        >
          <div className="bg-warning w-100 h-full">
            <div className="flex flex-col items-center justify-center bg-green-400 h-30">
              <div className="h-[50%]">
                <img className="h-full rounded-full" src={`${logo}`} />
              </div>
              <div className="p-2 capitalize font-serif text-primary font-semibold text-2xl">
                {brandName}
              </div>
            </div>
            <div>
              <nav>
                <ul className="grid grid-rows-5">
                  {links.map((link, index) => (
                    <li
                      onClick={onToggleMenuOpen}
                      key={index}
                      className=" h-15 hover:bg-green-200 border-b border-white"
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
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;

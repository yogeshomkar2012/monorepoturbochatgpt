import {
 ChevronDown,
  ChevronUp,
  LogOut,
} from "@repo/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarComponents = ({ data = [],socialLinksData=[] }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const handleToggle = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const navItemClass =
    "flex items-center gap-3 py-2 px-2 rounded-md hover:bg-white/10 transition-colors";

  return (
    <aside className="w-64 h-screen sticky top-0 bg-primary text-text-white grid grid-rows-[auto_1fr_auto]">
      {/* Branding */}
      <div className="flex flex-col items-center pt-6 pb-4 gap-2">
        <img
          className="h-16 w-16 rounded-full border-2 border-white/20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiiod4PVQrDsuJpzsEtcFSG-R77GFKDCRwA&s"
          alt="logo"
        />
        <div className="border-b border-white/10 w-full pb-2">
          <h2 className="text-center uppercase font-bold tracking-wider text-sm">
            omkarlogistic
          </h2>
        </div>
      </div>

      {/* Nav with Icons */}
      <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-4">
        <nav className="space-y-2 text-sm">
          {data.map((item, index) =>
            !item.subItems ? (
              <NavLink key={index} to={item.link} className={navItemClass}>
                <item.icon size={18} />
                <span>{item.title}</span>
              </NavLink>
            ) : (
              <div key={index}>
                <button
                  onClick={() => handleToggle(item.title)}
                  className={`flex items-center justify-between w-full ${navItemClass}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </div>
                  {openMenu === item.title ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>

                {openMenu === item.title && (
                  <div className="ml-9 mt-1 space-y-1 border-l border-white/20 pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.link}
                        className="block py-1.5 opacity-80 hover:opacity-100"
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}
        </nav>
      </div>

      {/* Footer / Socials */}
      <div className="border-t border-white/10 p-4 space-y-4">
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-red-500 hover:bg-red-600 rounded-md">
          <LogOut size={18} />
          <span>Logout</span>
        </button>

        <ul className="flex justify-around opacity-70">
          {socialLinksData.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link}>
                <item.icon size={20} />
              </NavLink>
            </li>
          ))}
         
        </ul>
      </div>
    </aside>
  );
};

export default SideBarComponents;

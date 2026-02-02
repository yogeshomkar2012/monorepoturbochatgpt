import React from "react";
import NavbarContainer from "../containers/NavbarContainer";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppNavigationShortcuts } from "../hooks/useAppNavigationShortcuts";
import FooterContainer from "../containers/FooterContainer";

export default function AuthLayout() {
//  key board control short cut key
  useAppNavigationShortcuts();
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <header className=" border-b-border bg-green-background p-3">
        <NavbarContainer />
      </header>

      <main className="min-h-screen flex items-center justify-center ">
        <Outlet />
      </main>
      <FooterContainer/>
    </div>
  );
}

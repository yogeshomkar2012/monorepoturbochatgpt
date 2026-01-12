import React from "react";
import NavbarContainer from "../containers/NavbarContainer";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarContainer />
      <section className="flex-1 flex items-center justify-center bg-red-300">
        <Outlet />
      </section>
    </div>
  );
}

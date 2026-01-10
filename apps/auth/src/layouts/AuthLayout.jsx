import React from "react";
import NavbarContainer from "../containers/NavbarContainer";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <NavbarContainer />
      <section>
        <Outlet />
      </section>
    </div>
  );
}

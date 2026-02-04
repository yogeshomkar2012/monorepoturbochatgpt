import React, { useState } from "react";
import {Outlet} from "react-router-dom"
import SideBarContainer from "../containers/SideBarContainer";
import DashboardHeaderContainer from "../containers/DashboardHeaderContainer";
const AdminDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Hidden on mobile, fixed width on desktop */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <SideBarContainer/>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
       <DashboardHeaderContainer onMenuClick={() => setIsOpen(true)}/>
        <main className="p-6 overflow-x-hidden">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};
export default AdminDashboardLayout;

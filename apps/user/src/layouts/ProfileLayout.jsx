import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutWrapper } from '@repo/ui';
const ProfileLayout = () => {
  const navClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-semibold transition-colors ${
      isActive
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-slate-500 hover:text-slate-800'
    }`;
  return (
    <LayoutWrapper className="">
      <div className="border-b border-slate-200 px-6 pt-4 flex items-center justify-center gap-4">
        <NavLink to="." end className={navClass}>
          View Profile
        </NavLink>

        <div className="w-px bg-slate-300 h-4 rotate-20 opacity-50"></div>

        <NavLink to="update" className={navClass}>
          Update Details
        </NavLink>
      </div>
      <div className="p-6 mx-auto flex justify-center items-center">
        <Outlet />
      </div>
    </LayoutWrapper>
  );
};

export default ProfileLayout;

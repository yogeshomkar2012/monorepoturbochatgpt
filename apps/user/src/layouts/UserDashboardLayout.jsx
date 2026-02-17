import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '@repo/ui';
import UserSidebarContainer from '../containers/UserSidebarContainer.jsx';
import UserHeadercontainer from '../containers/UserHeaderContainter.jsx';
const userDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div
        className={`
            fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
      >
        <UserSidebarContainer />
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
      <div className="flex-1 flex flex-col min-w-0">
        <UserHeadercontainer />
        <DashboardWrapper>
          <Outlet />
        </DashboardWrapper>
      </div>
    </div>
  );
};

export default userDashboardLayout;

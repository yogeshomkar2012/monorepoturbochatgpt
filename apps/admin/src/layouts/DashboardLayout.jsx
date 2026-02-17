import React, { useState } from 'react';
import { DashboardWrapper } from '@repo/ui';
import { Outlet } from 'react-router-dom';
import SideBarContainer from '../containers/AminSideBarContainer';
import AdminDashboardHeaderContainer from '../containers/AdminDashboardHeaderContainer';
const DashBoardLyout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div
        className={`
        fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        <SideBarContainer />
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminDashboardHeaderContainer onMenuClick={() => setIsOpen(true)} />
        <DashboardWrapper className="p-6 overflow-x-hidden">
          <Outlet />
        </DashboardWrapper>
      </div>
    </div>
  );
};

export default DashBoardLyout;

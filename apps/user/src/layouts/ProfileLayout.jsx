import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from '@repo/ui';
const ProfileLayout = () => {
  return (
    <LayoutWrapper className="">
      <Outlet />
    </LayoutWrapper>
  );
};

export default ProfileLayout;

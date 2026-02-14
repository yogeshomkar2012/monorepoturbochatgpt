import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '@repo/ui';
import Headercontainer from '../containers/HeaderContainer';
const userDashboardLayout = () => {
  return (
    <div className="flex flex-col">
      <Headercontainer />
      <DashboardWrapper>
        <Outlet />
      </DashboardWrapper>
    </div>
  );
};

export default userDashboardLayout;

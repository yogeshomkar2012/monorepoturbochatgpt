import { HeaderFactory } from '@repo/factories';
import { roleConstants } from '@repo/constants';
const AdminDashboardHeaderContainer = ({ onMenuClick }) => {
  return (
    <HeaderFactory role={roleConstants.ADMIN} onMenuClick={onMenuClick} />
  );
};
export default AdminDashboardHeaderContainer;

import { HeaderFactory } from '@repo/factories';
import { roleConstants } from '@repo/constants';
const DashboardHeaderContainer = ({ onMenuClick }) => {
    return <HeaderFactory role={roleConstants.SUPER_ADMIN} onMenuClick={onMenuClick} />;
};
export default DashboardHeaderContainer;

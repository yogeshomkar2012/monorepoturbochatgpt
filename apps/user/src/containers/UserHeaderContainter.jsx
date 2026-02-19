import { HeaderFactory } from '@repo/factories';
import { roleConstants } from '@repo/constants';
import  useUserHeader  from '../hooks/useUserHeader';
const UserHeaderContainter = ({ onMenuClick }) => {
  const { getHeaderData } = useUserHeader();

  // Mock Notifications Data
  const serverData = [];
  const headerData = getHeaderData(serverData);
  return <HeaderFactory role={roleConstants.USER} onMenuClick={onMenuClick} headerData={headerData} />;
};
export default UserHeaderContainter;

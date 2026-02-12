
import {HeaderFactory} from "@repo/factories"
const DashboardHeaderContainer = ({ onMenuClick }) => {
  return <HeaderFactory role="admin" onMenuClick={onMenuClick} />;
};

export default DashboardHeaderContainer;

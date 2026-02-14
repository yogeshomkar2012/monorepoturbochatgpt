import { SidebarFactory } from '@repo/factories';
import useSideBarHook from '../hooks/useSidBarHook';
import { roleConstants } from '@repo/constants';
import { NavLink } from 'react-router-dom';
const SideBarContainer = () => {
  const { getSidebarData, getSocialLinksData } = useSideBarHook();
  const sidebarLinks = []; // Placeholder for future API data
  const sidebarLinksData = getSidebarData(sidebarLinks); // Assuming the data is already in the desired format
  const socialLinks = []; // Placeholder for future API data
  const socialLinksData = getSocialLinksData(socialLinks);
  return (
    <SidebarFactory
      role={roleConstants.SUPER_ADMIN}
      data={sidebarLinksData}
      socialLinksData={socialLinksData}
      NavLink={NavLink}
    />
  );
};

export default SideBarContainer;

// packages
import { roleConstants } from '@repo/constants';
import { SidebarFactory } from '@repo/factories';
// packages
// hooks
import useSideBarHook from '../hooks/useUserHeader';
// hooks


import { NavLink } from 'react-router-dom';
const UserSidebarContainer = () => {
  const { getSidebarData, getSocialLinksData } = useSideBarHook();
  const sidebarLinks = []; // Placeholder for future API data
  const sidebarLinksData = getSidebarData(sidebarLinks); // Assuming the data is already in the desired format
  const socialLinks = []; // Placeholder for future API data
  const socialLinksData = getSocialLinksData(socialLinks);
  return (
    <SidebarFactory
      role={roleConstants.USER}
      data={sidebarLinksData}
      socialLinksData={socialLinksData}
      NavLink={NavLink}
    />
  );
};

export default UserSidebarContainer;

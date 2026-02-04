import React from "react";

import { useSideBarHook } from "../hooks/useSidebarHook";
import SideBarComponents from "../components/SideBarComponents";

const SideBarContainer = () => {
  const { getSidebarData, getSocialLinksData } = useSideBarHook();
  
  const sidebarLinks = []; // Placeholder for future API data
  const socialLinks = []; // Placeholder for future API data
  const socialLinksData = getSocialLinksData(socialLinks);
  const sidebarData = getSidebarData(sidebarLinks);

  return <SideBarComponents data={sidebarData} socialLinksData={socialLinksData} />;
};

export default SideBarContainer;

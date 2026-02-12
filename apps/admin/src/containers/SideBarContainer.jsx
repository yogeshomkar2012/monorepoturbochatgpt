import React from "react";

import { useSideBarHook } from "../hooks/useSidebarHook";
import {SidebarFactory} from "@repo/factories"
import { NavLink } from "react-router-dom";
const SideBarContainer = () => {
  const { getSidebarData, getSocialLinksData } = useSideBarHook();
  
  const sidebarLinks = []; // Placeholder for future API data
  const socialLinks = []; // Placeholder for future API data
  const socialLinksData = getSocialLinksData(socialLinks);
  const sidebarData = getSidebarData(sidebarLinks);
  return <SidebarFactory role="admin" data={sidebarData} socialLinksData={socialLinksData} NavLink={NavLink} />;
  
};

export default SideBarContainer;

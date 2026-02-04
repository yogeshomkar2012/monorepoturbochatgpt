import { resolveData } from "@repo/utils";
import { sideBarNavigationSchema, socialSchema } from "@repo/schema";

export const useSideBarHook = () => {
  const getSidebarData = (serverSidebarData) =>
    resolveData(serverSidebarData, sideBarNavigationSchema);
  const getSocialLinksData = (serverSocialLinksData) =>
    resolveData(serverSocialLinksData, socialSchema);
  return {
    getSidebarData,
    getSocialLinksData,
  };
};

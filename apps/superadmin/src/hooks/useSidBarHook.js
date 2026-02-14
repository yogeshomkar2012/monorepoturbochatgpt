import { resolveData } from '@repo/utils';
import { socialSchema, superAdminsideBarNavigationSchema } from '@repo/schema';
const useSideBarHook = () => {
  const getSocialLinksData = (serverData) =>
    resolveData(serverData, socialSchema);
  const getSidebarData = (serverData) =>
    resolveData(serverData, superAdminsideBarNavigationSchema);
  return {
    getSocialLinksData,
    getSidebarData,
  };
};
export default useSideBarHook;

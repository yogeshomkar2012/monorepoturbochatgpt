import { resolveData } from '@repo/utils';
import { socialSchema, AdminSideBarNavigationSchema } from '@repo/schema';
const useSideBarHook = () => {
  const getSocialLinksData = (serverData) =>
    resolveData(serverData, socialSchema);
  const getSidebarData = (serverData) =>
    resolveData(serverData, AdminSideBarNavigationSchema);
  return {
    getSocialLinksData,
    getSidebarData,
  };
};
export default useSideBarHook;

import { resolveData } from '@repo/utils';
import {
  userHeaderSchema,
  userSideBarSchema,
  socialSchema,
} from '@repo/schema';
const useUserHeader = () => {
  const getHeaderData = (serverData) =>
    resolveData(serverData, userHeaderSchema);
  const getSidebarData = (serverData) =>
    resolveData(serverData, userSideBarSchema);
  const getSocialLinksData = (serverdata) =>
    resolveData(serverdata, socialSchema);
  return {
    getHeaderData,
    getSidebarData,
    getSocialLinksData,
  };
};
export default useUserHeader;

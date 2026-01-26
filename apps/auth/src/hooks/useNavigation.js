import { navigationSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useNavigation = () => {
  const getNavigation = (serverNavData) =>
    resolveData(serverNavData, navigationSchema);
  return {
    getNavigation,
  };
};

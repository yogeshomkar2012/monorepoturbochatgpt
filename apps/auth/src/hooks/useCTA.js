import { callToActionSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useCTA = () => {
  const getCTA = (serverData) => resolveData(serverData, callToActionSchema);
  return {
    getCTA,
  };
};

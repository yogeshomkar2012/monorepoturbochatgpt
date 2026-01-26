import { brandingSchema, navigationSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useBranding = () => {
  const getBranding = (serverBrandData) =>
    resolveData(serverBrandData, brandingSchema);
 
  return {
    getBranding,
  };
};

import { brandingSchema, navigationSchema } from "@repo/app-schema";

export const useBranding = () => {
  const resolveBranding = (serverBrandData) => {
    const hasServerBrand =
      serverBrandData && Object.keys(serverBrandData).length > 0;

    return hasServerBrand ? serverBrandData : brandingSchema;
  };

  const resolveNavigation = (serverNavData) => {
    const hasServerNav =
      Array.isArray(serverNavData) && serverNavData.length > 0;

    return hasServerNav ? serverNavData : navigationSchema;
  };

  return {
    resolveBranding,
    resolveNavigation,
  };
};

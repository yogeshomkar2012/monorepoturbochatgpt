import {
  brandingSchema,
  navigationSchema,
  serviceSchema,
  whyChooseUsSchema,
  howItWorksSchema,
  coverageSchema,
  technologySchema,
  testimonialSchema,
  callToActionSchema,
  footerSchema,
} from "@repo/app-schema";

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
  const resolveServices = (serverServieData) => {
    const hasServerService =
      Array.isArray(serverServieData) && serverServieData > 0;
    return hasServerService ? serverServieData : serviceSchema;
  };

  const resolveHowItWorks = (serverData) => {
    const haseServerData =
      serverData &&
      typeof serverData === Object &&
      Array.isArray(serverData.steps) &&
      serverData.steps.length > 0;
    return haseServerData ? serverData : howItWorksSchema;
  };
  const resolvewhyChooseUs = (serverData) => {
    const haseServerData =
      serverData &&
      typeof serverData === Object &&
      Array.isArray(serverData.items) &&
      serverData.items.length > 0;
    return haseServerData ? serverData : whyChooseUsSchema;
  };
  const resolveCoverage = (serverData) => {
    const haseServerData =
      serverData &&
      typeof serverData === Object &&
      Array.isArray(serverData.stats) &&
      serverData.stats.length > 0;
    return haseServerData ? serverData : coverageSchema;
  };
  const resolvetechnology = (serverData) => {
    const haseServerData =
      serverData &&
      typeof serverData === Object &&
      Array.isArray(serverData.features) &&
      serverData.features.length > 0;
    return haseServerData ? serverData : technologySchema;
  };
  const resolveTestimonial = (serverData) => {
    const haseServerData = serverData && Object.keys(serverData).length > 0;
    return haseServerData ? serverData : testimonialSchema;
  };
  const resolvecallToAction = (serverData) => {
    const haseServerData =
      serverData &&
      typeof serverData === Object &&
      Array.isArray(serverData.testimonials) &&
      serverData.testimonials.length > 0;
    return haseServerData ? serverData : callToActionSchema;
  };
  const resolveFooter = (serverData) => {
    const haseServerData = serverData && Object.keys(serverData).length > 0;
    return haseServerData ? serverData : footerSchema;
  };

  return {
    resolveBranding,
    resolveNavigation,
    resolveServices,
    resolvewhyChooseUs,
    resolveHowItWorks,
    resolveCoverage,
    resolvetechnology,
    resolveTestimonial,
    resolvecallToAction,
    resolveFooter,
  };
};

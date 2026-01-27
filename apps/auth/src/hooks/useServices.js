import { servicesSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useServices = () => {
  const getServiceHero = (serverData) =>
    resolveData(serverData, servicesSchema.hero);
  const getCoreService = (serverData) =>
    resolveData(serverData, servicesSchema.coreServices);
  const getIndustry = (serverData) =>
    resolveData(serverData, servicesSchema.industries);
  const getWorkFlow = (serverData) =>
    resolveData(serverData, servicesSchema.workflow);
  const getServiceCTA = (serverData) =>
    resolveData(serverData, servicesSchema.cta);
  
  const getServiceDetailes = (slug, serverData) => {
    const slugData = resolveData(serverData, servicesSchema.coreServices);
    return slugData.find((service) => service.slug === slug);
  };
  return {
    getServiceCTA,
    getCoreService,
    getServiceHero,
    getIndustry,
    getWorkFlow,
    getServiceDetailes,
  };
};

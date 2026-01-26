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
  return {
    getServiceCTA,
    getCoreService,
    getServiceHero,
    getIndustry,
    getWorkFlow,
  };
};

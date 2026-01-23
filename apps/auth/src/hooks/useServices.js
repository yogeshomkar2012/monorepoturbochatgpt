import {serviceSchema} from "@repo/app-schema";

export const useServices = () => {
  const resolveServices = (serverData) => {
    const hasData = serverData && Object.keys(serverData).length > 0;

    return hasData ? serverData : servicesSchema;
  };

  return {
    resolveServices,
  };
};

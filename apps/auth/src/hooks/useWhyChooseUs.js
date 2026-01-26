import { whyChooseUsSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useWhyChooseUs = () => {
  const getWhyChooseUs = (serverData) =>
    resolveData(serverData, whyChooseUsSchema);
  return {
    getWhyChooseUs,
  };
};

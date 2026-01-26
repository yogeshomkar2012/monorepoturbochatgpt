import { howItWorksSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useHowItWorks = () => {
  const getHowItWorksData = (serverHowItworksData) =>
    resolveData(serverHowItworksData, howItWorksSchema);
    return {
    getHowItWorksData
}
};

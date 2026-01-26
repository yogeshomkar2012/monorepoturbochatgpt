import { coverageSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";
export const useCoverage = () => {
  const getCoverageData = (serverData) =>
    resolveData(serverData, coverageSchema);
  return {
    getCoverageData,
  };
};

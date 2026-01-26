import { certificationsSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useCertification = () => {
  const getCertification = (serverData) =>
    resolveData(serverData, certificationsSchema);
  return {
    getCertification,
  };
};

import { testimonialSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useTestiMonial = () => {
  const getTestiMonial = (serverData) =>
    resolveData(serverData, testimonialSchema);
  return {
    getTestiMonial,
  };
};

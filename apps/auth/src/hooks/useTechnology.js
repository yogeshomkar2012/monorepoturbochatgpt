import { technologySchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useTechnology = () => {
  const getTechnology = (serverData) =>
    resolveData(serverData, technologySchema);
  return {
    getTechnology,
  };
};

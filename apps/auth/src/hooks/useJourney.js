import { journeySchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useJourney = () => {
    const getJourney = (serverData) => resolveData(serverData, journeySchema);
    
  return {
    getJourney,
  };
};

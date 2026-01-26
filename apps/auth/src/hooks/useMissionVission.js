import { missionVisionSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useMissionVission = () => {
  const getMissionVisson = (serverData) =>
    resolveData(serverData, missionVisionSchema);
  return {
    getMissionVisson,
  };
};

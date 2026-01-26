import { teamSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useTeam = () => {
  const getTeam = (serverData) => resolveData(serverData, teamSchema);
  return {
    getTeam,
  };
};

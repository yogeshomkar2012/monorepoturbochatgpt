import { leadershipSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";

export const useLaderShip = () => {
  const getLeaderShip = (serverData) =>
    resolveData(serverData, leadershipSchema);
  return { getLeaderShip };
};

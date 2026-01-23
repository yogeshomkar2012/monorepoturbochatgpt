import {
  missionVisionSchema,
  leadershipSchema,
  journeySchema,
  certificationsSchema,
  teamSchema,
} from "@repo/app-schema";
export const useAbout = () => {
  const resolvemissionVision = (serverData) => {
    const hasData =
      serverData && Array.isArray(serverData) && serverData.length > 0;
    return hasData ? serverData : missionVisionSchema;
  };
  const resolveleadership = (serverData) => {
    const hasData =
      serverData && Array.isArray(serverData) && serverData.length > 0;
    return hasData ? serverData : leadershipSchema;
  };
  const resolvejourney = (serverData) => {
    const hasData =
      serverData && Array.isArray(serverData) && serverData.length > 0;
    return hasData ? serverData : journeySchema;
  };
  const resolveCertification = (serverData) => {
    const hasData =
      serverData && Array.isArray(serverData) && serverData.length > 0;
    return hasData ? serverData : certificationsSchema;
  };
  const resolveTeam = (serverData) => {
    const hasData =
      serverData && Array.isArray(serverData) && serverData.length > 0;
    return hasData ? serverData : teamSchema;
  };

  return {
    resolvemissionVision,
    resolveleadership,
    resolvejourney,
    resolveCertification,
    resolveTeam,
  };
};

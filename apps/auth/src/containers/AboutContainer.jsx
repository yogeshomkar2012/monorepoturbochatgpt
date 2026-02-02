// packages
import { MainWrapper } from "@repo/ui";
// packages
import { CallToAction } from "../components/home/CallToAction";
import AboutHero from "../components/about/AboutHero";
import { MissionVision } from "../components/about/MissionVision";
import { Leadership } from "../components/about/Leadership";
import { Journey } from "../components/about/Journey";
import { Certifications } from "../components/about/Certification";
import { Team } from "../components/about/Team";
import FooterContainer from "./FooterContainer";
import { useCTA } from "../hooks/useCTA";
import { useLaderShip } from "../hooks/useLeaderShip";
import { useMissionVission } from "../hooks/useMissionVission";
import { useJourney } from "../hooks/useJourney";
import { useCertification } from "../hooks/useCertification";
import { useTeam } from "../hooks/useTeam";
const AboutContainer = () => {
  const leadershipServerData = [];
  const { getLeaderShip } = useLaderShip();
  const leadershipData = getLeaderShip(leadershipServerData);

  const missionServerData = [];
  const { getMissionVisson } = useMissionVission();
  const resolvemissionVisionData = getMissionVisson(missionServerData);

  const journeyServerData = [];
  const { getJourney } = useJourney();
  const resolvejourneyData = getJourney(journeyServerData);

  const certificationServerData = [];
  const { getCertification } = useCertification();
  const certificationData = getCertification(certificationServerData);

  const teamServerData = [];
  const { getTeam } = useTeam();
  const teamData = getTeam(teamServerData);

  const serverCallToActionData = {};
  const { getCTA } = useCTA();
  const callToActionData = getCTA(serverCallToActionData);

  return (
    <>
      <MainWrapper className="grid gap-24">
        <AboutHero />
        <MissionVision data={resolvemissionVisionData} />
        <Leadership data={leadershipData} />
        <Journey data={resolvejourneyData} />
        <Certifications data={certificationData} />
        <Team data={teamData} />
        <CallToAction callToActionData={callToActionData} />
      </MainWrapper>
    
    </>
  );
};

export default AboutContainer;

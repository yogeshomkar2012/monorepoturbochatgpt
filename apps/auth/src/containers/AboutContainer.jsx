import React from "react";
import { CallToAction } from "../components/home/CallToAction";
import AboutHero from "../components/about/AboutHero";
import { useAbout } from "../hooks/useAbout";
import { MissionVision } from "../components/about/MissionVision";
import { Leadership } from "../components/about/Leadership";
import { Journey } from "../components/about/Journey";
import { Certifications } from "../components/about/Certification";
import { Team } from "../components/about/Team";
import { useHome } from "../hooks/useHome";
import Footer from "../components/home/Footer";
const AboutContainer = () => {
  const {
    resolvemissionVision,
    resolveleadership,
    resolvejourney,
    resolveCertification,
    resolveTeam,
  } = useAbout();
  const { resolvecallToAction, resolveFooter } = useHome();
  const leadershipServerData = [];
  const leadershipData = resolveleadership(leadershipServerData);
  const missionServerData = [];
  const resolvemissionVisionData = resolvemissionVision(missionServerData);
  const journeyServerData = [];
  const resolvejourneyData = resolvejourney(journeyServerData);
  const certificationServerData = [];
  const certificationData = resolveCertification(certificationServerData);
  const teamServerData = [];
  const teamData = resolveTeam(teamServerData);
  const serverCallToActionData = {};
  const callToActionData = resolvecallToAction(serverCallToActionData);
  const serverFooterData = {};
  const footerData = resolveFooter(serverFooterData);
  return (
    <main className="grid gap-24 pt-24 p-6 ">
      <AboutHero />
      <MissionVision data={resolvemissionVisionData} />
      <Leadership data={leadershipData} />
      <Journey data={resolvejourneyData} />
      <Certifications data={certificationData} />
      <Team data={teamData} />
      <CallToAction callToActionData={callToActionData} />
      <Footer
        brand={footerData.brand}
        links={footerData.links}
        copyright={footerData.copyright}
      />
    </main>
  );
};

export default AboutContainer;

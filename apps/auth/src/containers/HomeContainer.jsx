import Hero from "../components/home/Hero";
import { HowItWorks } from "../components/home/HowItWorks";

import ServicesSection from "../components/home/ServicesSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Coverage } from "../components/home/Coverage";
import { Technology } from "../components/home/Technology";
import { Testimonials } from "../components/home/Testtimaonials";
import { CallToAction } from "../components/home/CallToAction";
import FooterContainer from "./FooterContainer";

import { useBranding } from "../hooks/useBranding";
import { useHowItWorks } from "../hooks/useHowItWorks";
import { useCoverage } from "../hooks/useCoverage";
import { useWhyChooseUs } from "../hooks/useWhyChooseUs";
import { useTechnology } from "../hooks/useTechnology";
import { useTestiMonial } from "../hooks/useTestiMonial";
import { useCTA } from "../hooks/useCTA";

const HomeContainer = () => {
  const serverBrandData = {};
  const { getBranding } = useBranding();
  const branding = getBranding(serverBrandData);
  const serverHowItWorksData = {};
  const { getHowItWorksData } = useHowItWorks();
  const HowItWorksData = getHowItWorksData(serverHowItWorksData);

  const { getCoverageData } = useCoverage();
  const serverCoverageData = {};
  const coverageData = getCoverageData(serverCoverageData);

  const { getWhyChooseUs } = useWhyChooseUs();
  const serverWhyChooseusData = {};
  const whyChooseusData = getWhyChooseUs(serverWhyChooseusData);

  const serverTechnology = {};
  const { getTechnology } = useTechnology();
  const technologyData = getTechnology(serverTechnology);

  const serverTestimonialData = {};
  const { getTestiMonial } = useTestiMonial();
  const testimonialsData = getTestiMonial(serverTestimonialData);

  const serverCallToActionData = {};
  const { getCTA } = useCTA();
  const callToActionData = getCTA(serverCallToActionData);
  console.log(callToActionData);
  return (
    <main className="grid gap-24 pt-24 p-6 ">
      <Hero branding={branding} />
      <ServicesSection />
      <WhyChooseUs whyChooseusData={whyChooseusData} />
      <HowItWorks HowItWorksData={HowItWorksData} />
      <Coverage coverageData={coverageData} />
      <Technology technologyData={technologyData} />
      <Testimonials testimonialsData={testimonialsData} />
      <CallToAction callToActionData={callToActionData} />
      <FooterContainer />
    </main>
  );
};

export default HomeContainer;

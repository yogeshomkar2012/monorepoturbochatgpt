import React from "react";
import Hero from "../components/home/Hero";
import { HowItWorks } from "../components/home/HowItWorks";
import { useBranding } from "../hooks/useBranding";
import ServicesSection from "../components/home/ServicesSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Coverage } from "../components/home/Coverage";
import { Technology } from "../components/home/Technology";
import { Testimonials } from "../components/home/Testtimaonials";
import { CallToAction } from "../components/home/CallToAction";
import Footer from "../components/home/Footer";
const HomeContainer = () => {
  const {
    resolveHowItWorks,
    resolveBranding,
    resolveServices,
    resolvewhyChooseUs,
    resolveCoverage,
    resolvetechnology,
    resolveTestimonial,
    resolvecallToAction,
    resolveFooter,
  } = useBranding();
  const serverBrandData = {};
  const branding = resolveBranding(serverBrandData);
  const serverServiceData = [];
  const services = resolveServices(serverServiceData);
  const serverWhyChooseusData = {};
  const whyChooseusData = resolvewhyChooseUs(serverWhyChooseusData);
  const serverHowItWorksData = {};
  const HowItWorksData = resolveHowItWorks(serverHowItWorksData);
  const serverCoverageData = {};
  const coverageData = resolveCoverage(serverCoverageData);
  const serverTechnology = {};
  const technologyData = resolvetechnology(serverTechnology);
  const serverTestimonialData = {};
  const testimonialsData = resolveTestimonial(serverTestimonialData);
  const serverCallToActionData = {};
  const callToActionData = resolvecallToAction(serverCallToActionData);
  const serverFooterData = {};
  const footerData = resolveFooter(serverFooterData);
  return (
    <main className="grid gap-24 pt-24 p-6 ">
      <Hero branding={branding} />
      <ServicesSection services={services} />
      <WhyChooseUs whyChooseusData={whyChooseusData} />
      <HowItWorks HowItWorksData={HowItWorksData} />
      <Coverage coverageData={coverageData} />
      <Technology technologyData={technologyData} />
      <Testimonials testimonialsData={testimonialsData} />
      <CallToAction callToActionData={callToActionData} />
      <Footer
        brand={footerData.brand}
        links={footerData.links}
        copyright={footerData.copyright}
      />
    </main>
  );
};

export default HomeContainer;

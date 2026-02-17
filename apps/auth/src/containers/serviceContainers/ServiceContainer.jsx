// packages
import {MainWrapper } from "@repo/ui";
// packages
import ServiceHero from "../../components/services/ServiceHero";
import CoreServices from "../../components/services/CoreServices";
import IndustrySolutions from "../../components/services/IndustrySolutions";
import ServiceWorkflow from "../../components/services/ServiceWorkflow";
import ServiceCTA from "../../components/services/ServiceCTA";
import { useServices } from "../../hooks/useServices";

const ServiceContainer = () => {
  const {
    getServiceHero,
    getCoreService,
    getIndustry,
    getWorkFlow,
    getServiceCTA,
  } = useServices();
  const serviceIndustryServerData = [];
  const serviceIndustrayData = getIndustry(serviceIndustryServerData);
  const serviceHeroServerData = {};
  const serviceHeroData = getServiceHero(serviceHeroServerData);
  const coreServiceServerData = [];
  const coreServiceData = getCoreService(coreServiceServerData);
  const serverWorkFlowData = [];
  const serviceWorkFlowData = getWorkFlow(serverWorkFlowData);
  const serviceCTAServerData = {};
  const serviceCTAData = getServiceCTA(serviceCTAServerData);
  return (
    <>
      <ServiceHero data={serviceHeroData} />
      <MainWrapper className="grid gap-24 ">
        <CoreServices data={coreServiceData} />
        <IndustrySolutions data={serviceIndustrayData} />
        <ServiceWorkflow data={serviceWorkFlowData} />
        <ServiceCTA data={serviceCTAData} />
      </MainWrapper>
    </>
  );
};

export default ServiceContainer;

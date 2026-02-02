import React from "react";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { useServices } from "../../hooks/useServices";
import { useParams } from "react-router-dom";
import FooterContainer from "../FooterContainer";
import { servicesSchema } from "@repo/app-schema";
import ServiceOverView from "../../components/services/ServiceOverView";
import ServiceWorkflow from "../../components/services/ServiceWorkflow";
import IndustrySolutions from "../../components/services/IndustrySolutions";
import { MainWrapper } from "@repo/ui";
const ServiceDetailsContainer = () => {

  const { type } = useParams();
  const { getServiceDetailes } = useServices();

  const serverData = [];
  const data = getServiceDetailes(type, serverData);
  return (
    <>
      <ServiceHero data={data} />
      <MainWrapper className="grid gap-24 p-6">
        <ServiceOverView data={data.overview} />
        <IndustrySolutions data={data.industries} />
        <ServiceWorkflow data={data.workflow} />
        <ServiceFeatures data={data.features} />
        <ServiceCTA data={data.cta} />
      </MainWrapper>
      <FooterContainer />
    </>
  );
};

export default ServiceDetailsContainer;

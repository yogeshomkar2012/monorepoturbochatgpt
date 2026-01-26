import React from "react";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceProcess from "../../components/services/ServiceProcess";
import ServiceCTA from "../../components/services/ServiceCTA";
import { useServices } from "../../hooks/useServices";
import { useParams } from "react-router-dom";
import FooterContainer from "../FooterContainer";

const ServiceDetailsContainer = () => {
  const { resolveServceDetails } = useServices();
  const { type } = useParams();
  const serverServiceData = {};
  const service = resolveServceDetails(type, serverServiceData);
  if (!service) {
    return (
      <main className="pt-32 text-center text-slate-600">
        Service not found
      </main>
    );
  }
  return (
    <main className="grid gap-24 pt-24">
      <ServiceHero  />
      <ServiceFeatures />
      <ServiceProcess  />
      <ServiceCTA />
      <FooterContainer />
    </main>
  );
};

export default ServiceDetailsContainer;

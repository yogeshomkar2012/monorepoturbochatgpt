import React from "react";
import Hero from "../components/home/Hero"
import ServiceSkeleton from "../components/home/ServiceSkeleton";
import WhyChooseSkeleton from "../components/home/WhyChooseSkeleton";
import { useBranding } from "../hooks/useBranding";
const HomeContainer = () => {
  const { resolveBranding } = useBranding();
  const serverBrandData = {};
  const branding = resolveBranding(serverBrandData);
  console.log(branding)
  return (
    <main className="grid gap-24 pt-24 p-6">
      <Hero branding={branding} />
      <ServiceSkeleton />
      <WhyChooseSkeleton />
    </main>
  );
};

export default HomeContainer;

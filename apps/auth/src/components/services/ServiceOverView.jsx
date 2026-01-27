import React from "react";

const ServiceOverView = ({ data="" }) => {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-slate-700">{data}</p>
    </section>
  );
};

export default ServiceOverView;

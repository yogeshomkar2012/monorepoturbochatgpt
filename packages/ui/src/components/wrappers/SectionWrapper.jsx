import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  const basyStyle = "bg-white rounded-lg p-4";
  return <section className={`${basyStyle} ${className}`}>{children}</section>;
};

export default SectionWrapper;

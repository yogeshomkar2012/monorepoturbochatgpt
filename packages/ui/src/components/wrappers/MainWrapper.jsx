import React from "react";

const MainWrapper = ({ children, className = "" }) => {
  const baseStyle = "pt-15 p-6";
  return <main className={`${baseStyle} ${className}`}>{children}</main>;
};

export default MainWrapper;

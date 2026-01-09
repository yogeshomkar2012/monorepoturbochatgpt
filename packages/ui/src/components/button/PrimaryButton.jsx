import React from "react";
import BaseButton from "./BaseButton";

const PrimaryButton = (props) => {
  const baseStylesPrimary = `bg-primary text-white hover:opacity-90 ${
    props.className || ""
  }`;
  return <BaseButton {...props} className={baseStylesPrimary} />;
};

export default PrimaryButton;

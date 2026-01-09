import React from "react";
import BaseButton from "./BaseButton";

const DangerButton = (props) => {
  const baseClassDanger = `bg-danger text-white hover:opacity-90 ${
    props.className || ""
  }`;

  return <BaseButton {...props} className={baseClassDanger} />;
};

export default DangerButton;

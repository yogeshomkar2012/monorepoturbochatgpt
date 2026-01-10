import React from "react";
import BaseButton from "./BaseButton";

const SuccessButton = (props) => {
  const baseClassSuccess = `bg-green-600 hover:bg-green-700 text-white hover:bg ${
    props.className || ""
  }`;
  return <BaseButton {...props} className={baseClassSuccess} />;
};
export default SuccessButton;

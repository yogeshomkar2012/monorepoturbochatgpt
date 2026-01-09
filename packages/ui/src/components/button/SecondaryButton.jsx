import React from "react";
import BaseButton from "./BaseButton";

export default function SecondaryButton(props) {
  const baseClassSecondary = `bg-secondary text-white hover:opacity-90 ${
    props.className || ""
  }`;

  return <BaseButton {...props} className={baseClassSecondary} />;
}

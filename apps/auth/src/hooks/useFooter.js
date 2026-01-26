import React from "react";
import { footerSchema } from "@repo/app-schema";
import { resolveData } from "@repo/utils";
const useFooter = () => {
  const getFooter = (serverData) => resolveData(serverData, footerSchema);
  return {
    getFooter,
  };
};

export default useFooter;

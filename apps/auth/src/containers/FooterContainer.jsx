import React from "react";
import Footer from "../components/Footer";
import useFooter from "../hooks/useFooter";

const FooterContainer = () => {
  const { getFooter } = useFooter();
  const serverFooterData = {};
  const footerData = getFooter(serverFooterData);
  return (
    <Footer
      brand={footerData.brand}
      links={footerData.links}
      copyright={footerData.copyright}
    />
  );
};

export default FooterContainer;

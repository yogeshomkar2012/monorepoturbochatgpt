import React from "react";
import Contact from "../components/contact/Contact";
import FooterContainer from "./FooterContainer";
import { MainWrapper } from "@repo/ui";

const ContactContainer = () => {
  return (
    <>
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have questions or need support? We’re here to help you.
          </p>
        </div>
      </div>
      <MainWrapper>
        <Contact />
      </MainWrapper>
      <FooterContainer />
    </>
  );
};

export default ContactContainer;

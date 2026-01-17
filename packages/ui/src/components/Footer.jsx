import React from "react";

const Footer = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  return (
    <footer className="bg-warning text-center text-text-white font-semibold p-2 uppercase">
      © {year} Company Name
    </footer>
  );
};

export default Footer;

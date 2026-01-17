import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useBranding } from "../hooks/useBranding";

const NavbarContainer = () => {
  const { resolveBranding, resolveNavigation } = useBranding();

  // 🔴 Future API data
  const serverBrandData = {};
  const serverNavigationData = [];

  const branding = resolveBranding(serverBrandData);
  const navigationLinks = resolveNavigation(serverNavigationData);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen((prev) => !prev);

  return (
    <Navbar
      brandName={branding.brandName}
      logo={branding.logo}
      links={navigationLinks}
      isMobileMenuOpen={isMobileMenuOpen}
      onToggleMenuOpen={toggleMobileMenu}
    />
  );
};
//  isMobileMeuOpen,
  // onToggleMenuOpen,

export default NavbarContainer;

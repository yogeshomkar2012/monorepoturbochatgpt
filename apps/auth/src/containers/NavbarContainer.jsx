import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useBranding } from "../hooks/useBranding";
import { useNavigation } from "../hooks/useNavigation";

const NavbarContainer = () => {
  // 🔴 Future API data
  const serverBrandData = {};
  const serverNavigationData = [];
  const { getBranding } = useBranding();
  const { getNavigation } = useNavigation();
  const branding = getBranding(serverBrandData);
  const navigationLinks = getNavigation(serverNavigationData);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

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

export default NavbarContainer;

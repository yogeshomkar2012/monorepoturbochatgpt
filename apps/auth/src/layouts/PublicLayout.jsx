import NavbarContainer from "../containers/NavbarContainer";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "@repo/ui";
import { useAppNavigationShortcuts } from "../hooks/useAppNavigationShortcuts";
import FooterContainer from "../containers/FooterContainer";
const PublicLayout = () => {
  useAppNavigationShortcuts();
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <header className=" border-b-border bg-green-background p-3">
        <NavbarContainer />
      </header>

      {/* <main className="flex-1 flex items-center justify-center "> */}
      <Outlet />
      {/* </main> */}

    <FooterContainer/>
    </div>
  );
};
export default PublicLayout;

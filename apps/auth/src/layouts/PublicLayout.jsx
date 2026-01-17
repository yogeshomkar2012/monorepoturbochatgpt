import NavbarContainer from "../containers/NavbarContainer";
import { Outlet } from "react-router-dom";
import { Footer } from "@repo/ui";
const PublicLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <header className=" border-b-border bg-green-background p-3">
        <NavbarContainer />
      </header>

      {/* <main className="flex-1 flex items-center justify-center "> */}
        <Outlet />
      {/* </main> */}

      {/* <Footer /> */}
    </div>
  );
};
export default PublicLayout;

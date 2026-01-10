import NavbarContainer from "../containers/NavbarContainer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarContainer />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default PublicLayout;

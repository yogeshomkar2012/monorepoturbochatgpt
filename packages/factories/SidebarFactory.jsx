import AdminSideBar from '../ui/src/components/sidebar/AdminSideBar';
import SuperAdminSideBar from '../ui/src/components/sidebar/SuperAdminSideBar';
const sidebarMap = {
  admin: AdminSideBar,
  superadmin: SuperAdminSideBar,
};
export default function SidebarFactory({ role, ...props }) {
  const SidebarComponent = sidebarMap[role];

  return <SidebarComponent {...props} />;
}

import AdminSideBar from '../ui/src/components/sidebar/AdminSideBar';
import SuperAdminSideBar from '../ui/src/components/sidebar/SuperAdminSideBar';
import UserSideBar from '../ui/src/components/sidebar/UserSideBar';
const sidebarMap = {
  admin: AdminSideBar,
  superadmin: SuperAdminSideBar,
  user: UserSideBar,
};
export default function SidebarFactory({ role, ...props }) {
  const SidebarComponent = sidebarMap[role];
  return <SidebarComponent {...props} />;
}

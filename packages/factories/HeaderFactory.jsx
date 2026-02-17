import AdminHeader from '../ui/src/components/header/AdminHeader';
import superAdminHeader from '../ui/src/components/header/superAdminHeader';
import userHeader from '../ui/src/components/header/UserHeader';
const headerMap = {
  admin: AdminHeader,
  superadmin: superAdminHeader,
  user: userHeader,
};
export default function HeaderFactory({ role, ...props }) {
  const Components = headerMap[role];

  return <Components {...props} />;
}

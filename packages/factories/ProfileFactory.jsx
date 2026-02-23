import UserProfile from '../ui/src/components/Profile/UserProfile';
import AdminProfile from '../ui/src/components/Profile/AdminProfile';
import SuperAdminProfile from '../ui/src/components/Profile/SuperAdminProfile';
const profileMap = {
  user: UserProfile,
  admin: AdminProfile,
  superadmin: SuperAdminProfile,
};
export default function ProfileFactory({ role, data, ...props }) {
  const ProfilComponent = profileMap[role.toLowerCase()] || UserProfile;
  return (
    <div className="profile-container">
      <ProfilComponent data={data} {...props} />
    </div>
  );
}

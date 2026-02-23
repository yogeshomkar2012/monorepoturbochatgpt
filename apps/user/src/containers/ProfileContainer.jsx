import { ProfileFactory, ButtonFactory } from '@repo/factories';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("update", {replace:true})
  }

  const userData = {
    name: 'Omkar S.',
    email: 'omkar@logistics.com',
    contact: '+91 9876543210',
    role: 'System Administrator',
    officeAddress: 'HQ Bangalore, Floor 4, Sector 5',
    homeAddress: 'Street 12, Whitefield, Bangalore',
    avatar: null, // This will trigger the initials "OS"
  };
  return (
    <ProfileFactory
      role="user"
      data={userData}
      onUpdate={() => navigateTo()}
    />
  );
};

export default ProfileContainer;

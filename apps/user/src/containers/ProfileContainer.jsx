import { ProfileFactory } from '@repo/factories';
const ProfileContainer = () => {
  // const sampleDataNoImage = {
  //   name: 'John Smith',
  //   role: 'Field Technician',
  //   employeeId: 'EMP-98765',
  //   // image: undefined
  //   stats: {
  //     deliveries: 18,
  //     rating: 4.2,
  //     fuelScore: 28,
  //   },
  // };
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
    <div className="border border-red-400 min-h-screen flex items-center justify-center">
      <ProfileFactory
        role="user"
        data={userData}
        onUpdate={() => console.log('update user modul')}
      />
      ;
    </div>
  );
};

export default ProfileContainer;

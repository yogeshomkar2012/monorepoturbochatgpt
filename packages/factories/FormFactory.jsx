import AuthForm from '../ui/src/components/forms/authForm';
import ProfileUpdateFrom from '../ui/src/components/forms/ProfileUpdateFrom';
const FormMap = {
  auth: AuthForm,
  profile: ProfileUpdateFrom,
};
export default function FormFactory({ variant = 'auth', ...props }) {
  const FormComponent = FormMap[variant];
  if (!FormComponent) {
    alert(`Form Variant ${variant} not Found`);
    return null;
  }
  return <FormComponent {...props} />;
}

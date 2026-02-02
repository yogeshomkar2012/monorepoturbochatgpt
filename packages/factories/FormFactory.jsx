import AuthForm from "../ui/src/components/forms/authForm";

const FormMap = {
  auth: AuthForm,
};
export default function FormFactory({ variant = "auth", ...props }) {
  const FormComponent = FormMap[variant];
  if (!FormComponent) {
    alert(`Form Variant ${variant} not Found`);
    return null;
  }
  return <FormComponent {...props} />;
}

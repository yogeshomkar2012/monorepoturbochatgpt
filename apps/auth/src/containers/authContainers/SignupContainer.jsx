import SignupComponents from "../../components/authComponents/SignupComponents.jsx";
import useSignup from "../../hooks/authHooks/useSignup.js";

const SignupContainer = () => {
  const { handleSubmit, handleChang, errors, formData } = useSignup();
  return (
    <SignupComponents
      onSubmit={handleSubmit}
      errors={errors}
      onChange={handleChang}
      formData={formData}
    />
  );
};

export default SignupContainer;

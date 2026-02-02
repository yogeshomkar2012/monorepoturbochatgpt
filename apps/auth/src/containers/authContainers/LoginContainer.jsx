import React from "react";
import LoginComponent from "../../components/authComponents/LoginComponent";
import useLogin from "../../hooks/authHooks/useLogin";

const LoginContainer = () => {
  const { handleChang, formData, errors, handleSubmit } = useLogin();
  return (
    <LoginComponent
      onSubmit={handleSubmit}
      errors={errors}
      onChange={handleChang}
      formData={formData}
    />
  );
};

export default LoginContainer;

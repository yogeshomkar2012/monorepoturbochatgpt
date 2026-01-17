import React from "react";
import LoginComponent from "../components/authComponents/LoginComponent";
import { LoginAuth } from "../hooks/useAuth";

const LoginContainer = () => {
  const { handleChange, userData, handleSubmit } = LoginAuth();
  return (
    <LoginComponent
      handleChange={handleChange}
      userData={userData}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;

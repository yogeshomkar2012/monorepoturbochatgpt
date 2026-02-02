import React from "react";
import { AUTH_ROUTES } from "../../constants/routes.constants";
import { Link } from "react-router-dom";
import { FormFactory } from "@repo/factories";
import { formSchemaMap } from "@repo/app-schema";

const SignupComponents = ({ onSubmit, onChange, errors, formData }) => {
  return (
    <div className="bg-white  border-primary p-6 rounded-lg shadow-md w-96">
      <FormFactory
        variant="auth"
        formType="signup"
        fields={formSchemaMap.signup}
        submitLabel="signup"
        onSubmit={onSubmit}
        onChange={onChange}
        errors={errors}
        formData={formData}
      />
      <div className="text-center mt-2">
        <span className="text-center gap-2 text- text-gray-400 my-2 ">
          If you have an account.!
        </span>
        <Link
          to={AUTH_ROUTES.LOGIN}
          className="text-primary text-xs hover:underline hover:underline-offset-8 hover:decoration-warning"
        >
          click here
        </Link>
      </div>
    </div>
  );
};

export default SignupComponents;

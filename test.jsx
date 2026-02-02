import SignupComponents from "../../components/authComponents/SignupComponents.jsx";
import useSignup from "../../hooks/authHooks/useSignup.js";

const SignupContainer = () => {
  const { handleSubmit,handleChage } = useSignup();
  return <SignupComponents onSubmit={handleSubmit} onChange={ handleChage} />;
};

export default SignupContainer;
// -----------------------------------
import React from "react";
import { AUTH_ROUTES } from "../../constants/routes.constants";
import { Link } from "react-router-dom";
import { FormFactory } from "@repo/factories";
import { formSchemaMap } from "@repo/app-schema";

const SignupComponents = ({ onSubmit, onChange }) => {
  return (
    <div className="bg-white  border-primary p-6 rounded-lg shadow-md w-96">
      <FormFactory
        variant="auth"
        formType="signup"
        fields={formSchemaMap.signup}
        submitLabel="signup"
        onSubmit={onSubmit}
        onChange={onChange}
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
// ----------------------------
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
// ------------------------
import { InputFactory, ButtonFactory } from "@repo/factories";

const AuthForm = ({
  fields = [],
  submitLabel = "button text need",
  formType = "formType",
  onSubmit,
  onChange,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center text-primary underline underline-offset-8 decoration-warning group-hover:decoration-primary uppercase">
        {formType}
      </h1>
      <form onSubmit={onSubmit}>
        {fields.map((item, index) => (
          <InputFactory
            key={index}
            name={item.name}
            email={item.email}
            placeholder={item.placeholder}
            className="w-full mb-3"
            type={item.type}
            onChange={onChange}
          />
        ))}

        <ButtonFactory type="submit" className="w-full">
          {submitLabel}
        </ButtonFactory>
      </form>
    </>
  );
};

export default AuthForm;
// ----------------
import DangerButton from "../ui/src/components/button/DangerButton";
import PrimaryButton from "../ui/src/components/button/PrimaryButton";
import SecondaryButton from "../ui/src/components/button/SecondaryButton";
import SuccessButton from "../ui/src/components/button/SuccessButton";

const buttonMap = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  danger: DangerButton,
  success: SuccessButton,
};
export default function ButtonFactory({ variant = "primary", ...props }) {
  const ButtonComponent = buttonMap[variant] || Primary;
  return <ButtonComponent {...props} />;
}
import EmailInput from "../ui/src/components/input/EmailInput";
import PasswordInput from "../ui/src/components/input/PasswordInput";
import TextInput from "../ui/src/components/input/TextInput";

const InputMap = {
  email: EmailInput,
  password: PasswordInput,
  text: TextInput,
};

export default function FieldFactory({ type = "text", ...props }) {
  const InputComponent = InputMap[type] || TextInput;
  return <InputComponent {...props} />;
}

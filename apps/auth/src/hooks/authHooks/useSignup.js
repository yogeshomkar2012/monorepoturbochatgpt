import { useState } from "react";
import { ValidationSignUp } from "@repo/utils";
const useSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validate = () => {
    const result = ValidationSignUp(formData);
    setErrors(result);
    return Object.keys(result).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log(formData);
  };
  return {
    handleSubmit,
    handleChang,
    errors,
    formData,
  };
};
export default useSignup;

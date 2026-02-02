import { useState } from "react";
import { ValidationLogin } from "@repo/utils";
const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validate = () => {
    const result = ValidationLogin(formData);
    setErrors(result);
    return Object.keys(result).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(formData);
  };
  return {
    handleChang,
    formData,
    errors,
    handleSubmit,
  };
};
export default useLogin;

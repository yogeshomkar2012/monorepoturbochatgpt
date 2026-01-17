import { useState } from "react";
export const LoginAuth = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "sadmin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(alert("jsj"));
  };
  return {
    userData,
    handleChange,
    handleSubmit,
  };
};

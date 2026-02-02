import { ButtonFactory } from "@repo/factories";
import { useState } from "react";
import LoginContainer from "../../containers/authContainers/LoginContainer";
function LoginPages() {
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
  return (
    <LoginContainer/>
  );
}

export default LoginPages;

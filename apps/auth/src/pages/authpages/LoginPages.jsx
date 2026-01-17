import { ButtonFactory } from "@repo/factories";
import { useState } from "react";
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
    // <div className="flex items-center justify-center bg-red-400">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="email"
            value={userData.email}
            type="email"
            className="w-full mb-3 px-3 py-2 border rounded"
            placeholder="Email"
          />

          <input
            name="password"
            onChange={handleChange}
            value={userData.password}
            className="w-full mb-4 px-3 py-2 border rounded"
            placeholder="Password"
            type="password"
          />
          <ButtonFactory type="submit" className="w-full">
            Sign In
          </ButtonFactory>
        </form>
      </div>
    // </div>
  );
}

export default LoginPages;

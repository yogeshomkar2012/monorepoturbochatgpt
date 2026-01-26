import { ButtonFactory } from "@repo/factories";
const LoginComponent = ({ handleChange, userData, handleSubmit }) => {
  return (
    <div className="bg-white  border-primary p-6 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4 text-center text-primary uppercase">
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          value={userData.email}
          type="email"
          className="w-full mb-3 px-3 py-2 border border-gray-300 focus:outline-primary rounded"
          placeholder="Email"
        />

        <input
          name="password"
          onChange={handleChange}
          value={userData.password}
          className="w-full mb-4 px-3 py-2 border border-gray-300 focus:outline-primary rounded"
          placeholder="Password"
          type="password"
        />
        <ButtonFactory type="submit" className="w-full">
          Sign In
        </ButtonFactory>
      </form>
    </div>
  );
};

export default LoginComponent;
``;

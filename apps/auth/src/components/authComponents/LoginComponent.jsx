import { Link } from 'react-router-dom';
import { AUTH_ROUTES } from '@repo/constants';
import { formSchemaMap } from '@repo/app-schema';
import { FormFactory } from '@repo/factories';


const LoginComponent = ({ onSubmit, onChange, errors, formData }) => {
  return (
    <div className="bg-white  border-primary p-6 rounded-lg shadow-md w-96 group">
      <FormFactory
        variant="auth"
        formType="login"
        fields={formSchemaMap.login}
        submitLabel="signin"
        onSubmit={onSubmit}
        onChange={onChange}
        errors={errors}
        formData={formData}
      />
      <div className="text-center mt-2">
        <span className="text-center gap-2 text- text-gray-400 my-2 ">
          If you don't have an account.!
        </span>
        <Link
          to={`/${AUTH_ROUTES.SIGNUP}`}
          className="text-primary text-xs hover:underline hover:underline-offset-8 hover:decoration-warning"
        >
          click here
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;

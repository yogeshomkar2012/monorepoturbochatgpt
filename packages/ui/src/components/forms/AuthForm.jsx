import { InputFactory, ButtonFactory } from "@repo/factories";

const AuthForm = ({
  fields = [],
  submitLabel = "button text need",
  formType = "formType",
  onSubmit,
  onChange,
  errors,
  formData,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center text-primary underline underline-offset-8 decoration-warning group-hover:decoration-primary uppercase">
        {formType}
      </h1>
      <form onSubmit={onSubmit}>
        {fields.map((item, index) => (
          <div key={index} className="flex flex-col">
            {errors && errors[item.name] ? (
              <p className="text-red-500 text-end font-serif text-sm">
                {errors[item.name]}
              </p>
            ) : (
              <span className="text-red-500 text-end">*</span>
            )}
            <InputFactory
              key={index}
              name={item.name}
              placeholder={item.placeholder}
              className="w-full mb-3"
              type={item.type}
              onChange={onChange}
              value={formData[item.name]}
            />
          </div>
        ))}

        <ButtonFactory type="submit" className="w-full">
          {submitLabel}
        </ButtonFactory>
      </form>
    </>
  );
};

export default AuthForm;

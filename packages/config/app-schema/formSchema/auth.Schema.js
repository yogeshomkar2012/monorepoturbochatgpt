export const loginSchema = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "email Address",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "**********",
    label: "password",
    required: true,
  },
];
export const signupSchema = [
  {
    name: "name",
    type: "text",
    placeholder: "name",
    label: "user name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email Address",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "**********",
    label: "password",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "text",
    placeholder: "**********",
    label: "confirm Password",
    required: true,
  },
];

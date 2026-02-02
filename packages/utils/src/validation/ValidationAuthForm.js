import ValidationEmail from "./ValidationEmail";
import ValidationPassword from "./ValidationPassword";

export const ValidationSignUp = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {};
  if (!name.trim()) {
    errors.name = "Name Is Required";
  }
  const emailError = ValidationEmail(email);
  if (emailError) {
    errors.email = emailError;
  }
  const passwordError = ValidationPassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Confirm Password Required";
  }
  if (confirmPassword !== password) {
    errors.confirmPassword = "Password do not match";
  }
  return errors;
};
export const ValidationLogin = ({ email, password }) => {
  const errors = {};

  const emailError = ValidationEmail(email);
  if (emailError) {
    errors.email = emailError;
  }
  const passwordError = ValidationPassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }
  return errors;
};

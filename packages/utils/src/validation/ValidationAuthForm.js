import ValidationEmail from "./ValidationEmail";
import ValidationPassword from "./ValidationPassword";

export const ValidationSignUp = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {};
  console.log(name.length);
  if (!name.trim()) {
    errors.name = "Name Is Required";
  }
  if (!name.length < 3) {
    errors.name = "Name Is Atleast 3 charecters";
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

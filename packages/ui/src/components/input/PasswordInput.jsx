import BaseInput from "./BaseInput";

export default function PasswordInput(props) {
  const PasswordInputStyle = `${props.className || ""}`;
  return (
    <BaseInput type="password" className={PasswordInputStyle} {...props} />
  );
}

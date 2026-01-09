import BaseInput from "./BaseInput";

export default function EmailInput(props) {
  const EmailInputStyle = `${props.className || ""}`;
  return <BaseInput type="email" className={EmailInputStyle} {...props} />;
}

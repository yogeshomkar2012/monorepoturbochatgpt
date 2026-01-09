import BaseInput from "./BaseInput";

export default function TextInput(props) {
  const TextInputStyle = `${props.className || ""}`;
  return <BaseInput type="text" className={TextInputStyle} {...props} />;
}

import EmailInput from "../ui/src/components/input/EmailInput";
import PasswordInput from "../ui/src/components/input/PasswordInput";
import TextInput from "../ui/src/components/input/TextInput";

const InputMap = {
  email: EmailInput,
  password: PasswordInput,
  text: TextInput,
};

export default function FieldFactory({ type = "text", ...props }) {
  const InputComponent = InputMap[type] || TextInput;
  return <InputComponent {...props} />;
}

import DangerButton from "../ui/src/components/button/DangerButton";
import PrimaryButton from "../ui/src/components/button/PrimaryButton";
import SecondaryButton from "../ui/src/components/button/SecondaryButton";
import SuccessButton from "../ui/src/components/button/SuccessButton";

const buttonMap = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  danger: DangerButton,
  success: SuccessButton,
};
export default function ButtonFactory({ variant = "primary",...props}) {
  const ButtonComponent = buttonMap[variant] || Primary;
  return <ButtonComponent {...props} />;
}

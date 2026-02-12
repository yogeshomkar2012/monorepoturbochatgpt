import {DangerButton,PrimaryButton,SecondaryButton,SuccessButton} from "@repo/ui"
const buttonMap = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  danger: DangerButton,
  success: SuccessButton,
};
export default function ButtonFactory({ variant = "primary", ...props }) {
  const ButtonComponent = buttonMap[variant] || Primary;
  return <ButtonComponent {...props} />;
}

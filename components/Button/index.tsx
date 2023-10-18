import { TextButton, Button as ButtonStyled } from "./styles";

export type variantButton = "primary" | "secondary" | "outlined";

interface IButton {
  label: string;
  variant?: variantButton;
  marginTop?: number;
  onPress?: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  marginTop,
  onPress,
}: IButton): JSX.Element => {
  return (
    <ButtonStyled
      variant={variant}
      marginTop={marginTop}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <TextButton variant={variant}>{label}</TextButton>
    </ButtonStyled>
  );
};

import { TextButton, Button as ButtonStyled } from "./styles";

export type variantButton = "primary" | "secondary" | "outlined";

interface IButton {
  label: string;
  variant?: variantButton;
  marginTop?: number;
}

export const Button = ({
  label,
  variant = "primary",
  marginTop,
}: IButton): JSX.Element => {
  return (
    <ButtonStyled variant={variant} marginTop={marginTop}>
      <TextButton>{label}</TextButton>
    </ButtonStyled>
  );
};

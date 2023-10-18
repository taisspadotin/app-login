import styled, { css } from "styled-components/native";
import { variantButton } from ".";

interface IButton {
  variant?: variantButton;
  marginTop?: number;
}
export const Button = styled.TouchableOpacity<IButton>`
  background-color: ${({ theme, variant }) =>
    variant === "outlined" ? theme.background : theme.mainColor.primary};
  width: 100%;
  height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme, variant }) =>
    variant === "outlined" &&
    css`
      border: 1px solid ${theme.fontsColor.contrastColor};
    `};
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.fontsColor.mainColor};
  font-weight: 800;
  font-size: 14px;
`;

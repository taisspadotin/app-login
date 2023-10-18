import styled, { css } from "styled-components/native";

interface ITextInput {
  marginBottom?: number;
  marginTop?: number;
  paddingLeft?: number;
}
export const TextInput = styled.TextInput<ITextInput>`
  border: 1px solid ${({ theme }) => theme.fontsColor.secondary};
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  margin-top: ${({ marginTop }) => marginTop ?? 4}px;
  padding-left: ${({ paddingLeft }) => paddingLeft ?? 5}px;
  color: ${({ theme }) => theme.fontsColor.primary};
`;

interface ILabel {
  isError?: boolean;
  marginBottom?: number;
}
export const Label = styled.Text<ILabel>`
  font-weight: ${({ isError }) => (isError ? 600 : 700)};
  color: ${({ theme, isError }) =>
    isError ? theme.fontsColor.error : theme.fontsColor.primary};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
`;

interface IIconContent {
  top?: number;
  iconIsLeft?: boolean;
}
export const IconContent = styled.TouchableOpacity<IIconContent>`
  position: absolute;
  ${({ iconIsLeft }) =>
    iconIsLeft
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}

  top: ${({ top }) => top ?? 30}px;
  z-index: 9;
`;

export const Container = styled.View`
  position: relative;
  width: 100%;
`;

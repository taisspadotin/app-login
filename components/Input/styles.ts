import styled from "styled-components/native";

interface ITextInput {
  marginBottom?: number;
  marginTop?: number;
}
export const TextInput = styled.TextInput<ITextInput>`
  border: 1px solid ${({ theme }) => theme.fontsColor.secondary};
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  margin-top: ${({ marginTop }) => marginTop ?? 4}px;
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

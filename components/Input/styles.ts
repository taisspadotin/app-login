import styled from "styled-components/native";

interface ITextInput {
  marginBottom?: number;
}
export const TextInput = styled.TextInput<ITextInput>`
  border: 1px solid ${({ theme }) => theme.fontsColor.secondary};
  height: 50px;
  width: 100%;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
`;

export const Label = styled.Text`
  font-weight: 700;
`;

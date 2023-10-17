import styled, { css } from "styled-components/native";

export const TextInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.fontsColor.secondary};
  height: 50px;
  width: 90%;
  border-radius: 4px;
  padding: 5px;
`;

export const Label = styled.Text``;

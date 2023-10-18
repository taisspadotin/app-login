import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.fontsColor.primary};
  font-size: 18px;
`;

export const PopularTopics = styled.Text`
  color: ${({ theme }) => theme.fontsColor.primary};
  font-size: 14px;
  font-weight: 800;
  margin-top: 50px;
`;

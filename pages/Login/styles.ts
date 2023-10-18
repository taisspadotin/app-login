import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-around;
  display: flex;
  padding: 30px;
  min-height: 600px;
`;

export const MainLabel = styled.Text`
  font-size: 20px;
  font-weight: 800;
  margin: 20px 0 10px 0;
  color: ${({ theme }) => theme.fontsColor.primary};
`;

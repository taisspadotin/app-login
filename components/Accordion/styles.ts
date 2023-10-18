import styled from "styled-components/native";

interface IProps {
  isActive?: boolean;
}

export const Title = styled.Text<IProps>`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.mainColor.primary : theme.fontsColor.primary};
`;

export const Body = styled.Text`
  font-size: 14px;
  padding-top: 10px;
  color: ${({ theme }) => theme.fontsColor.primary};
`;

export const Content = styled.View`
  border: 0px solid ${({ theme }) => theme.fontsColor.primary}66;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  padding: 20px 5px;
`;

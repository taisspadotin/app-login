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

export const LogoWrapper = styled.View`
  background-color: ${({ theme }) => theme.mainColor.secondary};
  border-radius: 12px;
  padding: 8px 20px;
`;

export const LogoLabel = styled.Text`
  color: ${({ theme }) => theme.fontsColor.primary};
  font-weight: 800;
  font-size: 14px;
`;

interface ILabel {
  fontWeight?: number;
}
export const Label = styled.Text<ILabel>`
  color: ${({ theme }) => theme.fontsColor.primary};
  font-weight: ${({ fontWeight }) => fontWeight ?? 600};
`;

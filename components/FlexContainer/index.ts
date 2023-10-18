import styled, { css } from "styled-components/native";

interface IFlexContainer {
  marginLeft?: React.CSSProperties["marginLeft"];
  marginRight?: React.CSSProperties["marginRight"];
  marginTop?: React.CSSProperties["marginTop"];
  marginBottom?: React.CSSProperties["marginBottom"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexDirection?: React.CSSProperties["flexDirection"];
  minHeight?: number;
}

export const FlexContainer = styled.View<IFlexContainer>`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? "flex-start"};
  align-items: ${({ alignItems }) => alignItems ?? "flex-start"};
  margin-left: ${({ marginLeft }) => marginLeft ?? 0}px;
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  margin-right: ${({ marginRight }) => marginRight ?? 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `};
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}px;
    `};
`;

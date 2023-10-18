import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import "react-native";
import { lightTheme } from "../themes";

const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";
export { customRender as render };

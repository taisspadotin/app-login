import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { Login } from ".";
import { render } from "../../helpers/test-helper";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Login", () => {
  it("Expect to have the main components", () => {
    const { queryByText } = render(<Login />);
    expect(queryByText("Usuário")).toBeTruthy();
    expect(queryByText("Senha")).toBeTruthy();
  });
});

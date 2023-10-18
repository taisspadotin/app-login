import React from "react";
import { fireEvent, waitFor } from "@testing-library/react-native";
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

  it("Expect to show errors when input is empty", async () => {
    const { getByText } = render(<Login />);
    fireEvent.press(getByText("Acessar"));
    await waitFor(() => {
      expect(getByText("Preencha o nome de usuário"));
      expect(getByText("Preencha a senha"));
    });
  });

  it("Expect to don't show errors when input isn't empty", async () => {
    const { getByText, getByTestId, queryByText } = render(<Login />);
    fireEvent.press(getByText("Acessar"));
    await waitFor(() => {
      expect(getByText("Preencha o nome de usuário")).toBeTruthy();
      expect(getByText("Preencha a senha")).toBeTruthy();
    });
    fireEvent.changeText(getByTestId("user-input"), "test");
    fireEvent.changeText(getByTestId("password-input"), "test");
    fireEvent.press(getByText("Acessar"));
    await waitFor(() => {
      expect(queryByText("Preencha o nome de usuário")).toBeFalsy();
      expect(queryByText("Preencha a senha")).toBeFalsy();
    });
  });
});

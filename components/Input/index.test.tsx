import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { Input } from ".";
import { render } from "../../helpers/test-helper";

describe("Input", () => {
  it("Expect the label to be in the component", () => {
    const { queryByText } = render(
      <Input label="test" value="value" onChange={jest.fn()} />
    );
    expect(queryByText("test")).toBeTruthy();
  });

  it("Expect to show the icon content when has icon name", () => {
    const { getByTestId } = render(
      <Input label="test" value="value" onChange={jest.fn()} iconName="eye" />
    );
    expect(getByTestId("input-icon")).toBeTruthy();
  });

  it("Expect to call the icon function and has icon name", () => {
    const mockedFunction = jest.fn();
    const { getByTestId } = render(
      <Input
        label="test"
        value="value"
        onChange={jest.fn()}
        iconName="eye"
        onClickIcon={mockedFunction}
      />
    );
    expect(getByTestId("input-icon")).toBeTruthy();
    fireEvent.press(getByTestId("input-icon"));
    expect(mockedFunction).toHaveBeenCalled();
  });

  it("Expect to show the error when has error", () => {
    const { queryByText } = render(
      <Input
        label="test"
        value="value"
        onChange={jest.fn()}
        error="error-test"
      />
    );
    expect(queryByText("error-test")).toBeTruthy();
  });
});

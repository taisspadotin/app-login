import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { Button } from ".";
import { render } from "../../helpers/test-helper";

describe("Button", () => {
  it("Expect the label to be in the component", () => {
    const { queryByText } = render(<Button label="test" />);
    expect(queryByText("test")).toBeTruthy();
  });

  it("Expect to call the function on press the button", () => {
    const mockedFunction = jest.fn();
    const { getByTestId } = render(
      <Button label="test" onPress={mockedFunction} />
    );
    expect(mockedFunction).not.toBeCalled();
    fireEvent.press(getByTestId("button"));
    expect(mockedFunction).toBeCalled();
  });
});

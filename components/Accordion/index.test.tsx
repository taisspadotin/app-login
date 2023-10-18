import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { Accordion } from ".";
import { render } from "../../helpers/test-helper";

describe("Accordion", () => {
  it("Expect the accordion have the title and don't have a body", () => {
    const { queryByTestId } = render(<Accordion title="test" text="text" />);
    expect(queryByTestId("accordion-text")).toBeTruthy();
    expect(queryByTestId("accordion-body")).toBeFalsy();
  });

  it("Expect the accordion to have a body when click in the title", () => {
    const { getByTestId } = render(<Accordion title="test" text="text" />);
    fireEvent.press(getByTestId("accordion-text"));
    expect(getByTestId("accordion-text")).toBeTruthy();
    expect(getByTestId("accordion-body")).toBeTruthy();
  });

  it("Expect the body text to be in the screen", () => {
    const { getByTestId, getByText } = render(
      <Accordion title="test" text="text" />
    );
    fireEvent.press(getByTestId("accordion-text"));
    expect(getByTestId("accordion-text")).toBeTruthy();
    expect(getByTestId("accordion-body")).toBeTruthy();
    expect(getByText("test")).toBeTruthy();
    expect(getByText("text")).toBeTruthy();
  });
});

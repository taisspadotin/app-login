import React from "react";
import { waitFor } from "@testing-library/react-native";
import { HelpCenter } from ".";
import { render } from "../../helpers/test-helper";
import MockAdapter from "axios-mock-adapter";
import { dataAPI } from "../../api";

const mock = new MockAdapter(dataAPI, { delayResponse: 300 });

beforeAll(() => {
  mock.reset();
});

describe("HelpCenter", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("Expect to have the input of search", () => {
    const { queryByTestId } = render(<HelpCenter />);
    expect(queryByTestId("input-search")).toBeTruthy();
  });

  it("Expect to be loading when open the screen", () => {
    const { queryByTestId } = render(<HelpCenter />);
    expect(queryByTestId("loading-content")).toBeTruthy();
  });

  it("Expect don't be loading when the request is completed", async () => {
    const { queryByTestId } = render(<HelpCenter />);
    mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(200, []);
    await waitFor(() => {
      expect(queryByTestId("loading-content")).toBeFalsy();
    });
  });

  it("Expect to render the items of the request", async () => {
    mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(200, [
      {
        id: 1,
        title: "title accordion",
        body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
      },
    ]);
    const { queryByText } = render(<HelpCenter />);
    await waitFor(() => {
      expect(queryByText("title accordion")).toBeTruthy();
    });
  });

  it("Expect to not be loading when error on request", async () => {
    mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(501, null);
    const { queryByTestId } = render(<HelpCenter />);
    await waitFor(() => {
      expect(queryByTestId("loading-content")).toBeFalsy();
    });
  });
});

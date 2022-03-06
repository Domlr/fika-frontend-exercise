import React from "react";
import { render } from "@testing-library/react-native";
import { App } from "./App";

describe("Testing Setup", () => {
  it("should throw an error message when text is not page ", () => {
    const { getByText } = render(<App />);
    expect(() => getByText("This is not on the page")).toThrow();
  });
});

describe("App Render", () => {
  it("renders the app", () => {
    const { getByText } = render(<App />);
    expect(() => getByText("App.js is where the magic happens!"));
  });
});
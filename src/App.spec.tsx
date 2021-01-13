import React from "react";
import { render, act } from "./utils";
import { App } from "./App";

describe("<App /> ", () => {
  test("renders learn react link", async() => {
    await act(async () => {
      render(<App />);
    });
    expect(location.pathname).toBe("/users");
  });
});
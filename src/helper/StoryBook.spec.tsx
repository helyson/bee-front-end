import React from "react";
import { cleanup, render } from "@testing-library/react";
import { StoryBookWrapper } from "./StoryBook";

describe(" <StoryBook />", () => {
  afterEach(cleanup);
  test("should be render icon", () => {
    const { container } = render(<StoryBookWrapper />);
    expect(container).toMatchSnapshot();
  });
});

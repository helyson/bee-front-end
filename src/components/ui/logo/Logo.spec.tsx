import React from "react";
import { render, cleanup } from "@testing-library/react";
import { UILogo } from "./Logo";

describe(" <UILogo />", () => {
  afterEach(cleanup);
  test("should be render logo basic", () => {
    const { container } = render( <UILogo />);
    expect(container.firstChild).toHaveClass("container");
  });
});

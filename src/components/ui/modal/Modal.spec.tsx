import React from "react";
import { render, cleanup } from "@testing-library/react";
import { UIModal } from "./Modal";

describe(" <UILogo />", () => {
  afterEach(cleanup);
  test("should be render Modal basic", () => {
    const { getByText } = render(<UIModal title="titulo de modal"/>)
    expect(getByText(/titulo de modal/i)).toBeInTheDocument();
  });
  test("should be render Modal close", () => {
    const { queryByTestId } = render(<UIModal title="titulo de modal" hasClose/>)
    const svgElement = queryByTestId("svg-element");
    expect(svgElement).toBeInTheDocument();
  });
});

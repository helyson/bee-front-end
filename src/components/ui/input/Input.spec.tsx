import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UIInput } from "./Input";

describe(" <UIInput />", () => {
  let input: any;
  const onChange = jest.fn();
  afterEach(cleanup);
  beforeEach(() => {
    const { getByLabelText } = render(<UIInput onChange={onChange} />);
    input = getByLabelText("input");
  });
  test("should be render input", () => {
    expect(input).toBeInTheDocument();
  });
  test("should be change data", () => {
    const onChange = { target: { value: "change text info" } };
    expect(input.value).toBe("");
    fireEvent.change(input, onChange);
    expect(input.value).toBe("change text info");
  });
  test("should be input with icon search", () => {
    const { queryByTestId } = render(
      <UIInput onChange={onChange} defaultValue="text" hasSearch />
    );
    const svgElement = queryByTestId("svg-element");
    expect(svgElement).toBeInTheDocument();
  });
});

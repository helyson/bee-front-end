import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { UIButton } from "./Button";
import { ButtonVarianEnum, ButtonTypeEnum } from "src/models/ui";

describe(" <Button />", () => {
  afterEach(cleanup);
  test("should be render button primary and generate onClick event", () => {
    const onClick = jest.fn();
    const { getByText, container } = render(
      <UIButton text="text button" onClick={onClick} />
    );
    expect(getByText(/text button/i)).toBeInTheDocument();
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByText("text button"));
    expect(onClick).toHaveBeenCalled();
    expect(container.firstChild).toHaveClass("beetrack-btn-primary");
  });

  test("should be render variant button no clickable", () => {
    const onClick = jest.fn();
    const { getByText, container } = render(
      <UIButton
        text="text button"
        onClick={onClick}
        isDisabled
        variant={ButtonVarianEnum.Secondary}
      />
    );
    expect(getByText(/text button/i).closest("button")).toBeDisabled();
    expect(container.firstChild).toHaveClass("beetrack-btn-secondary");
    fireEvent.click(getByText("text button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  test("should be render icon button", () => {
    const onClick = jest.fn();
    const { queryByTestId, container } = render(
      <UIButton onClick={onClick} buttonType={ButtonTypeEnum.Icon} />
    );
    const svgElement = queryByTestId("svg-element");
    expect(container.firstChild).toHaveClass("beetrack-icon-primary");
    expect(svgElement).toBeInTheDocument();
  });

  test("should be render link button", () => {
    const onClick = jest.fn();
    const { container } = render(
      <UIButton
        text="Text Button"
        onClick={onClick}
        variant={ButtonVarianEnum.Gray}
        buttonType={ButtonTypeEnum.Link}
      />
    );
    expect(container.firstChild).toHaveClass("beetrack-link-gray");
  });
  test("should be render button with extraCss", () => {
    const onClick = jest.fn();
    const { container } = render(
      <UIButton
        text="Text Button"
        onClick={onClick}
        extraStyle={{ marginRight: "20px", marginTop: "20px" }}
      />
    );
    expect(container.firstChild).toHaveStyle(
      "margin-right: 20px; margin-top: 20px"
    );
  });
});

import React from "react";
import { cleanup, render } from "@testing-library/react";
import { UISvgIcon } from "./Icon";
import { IconEnum } from "src/models/ui";

describe(" <UISvgIcon />", () => {
  afterEach(cleanup);
  test("should be render icon", () => {
    const { container } = render(
      <UISvgIcon
        name={IconEnum.Plus}
        className="beetrack-fill-primary"
        width="28"
        height="28"
      />
    );
    expect(container).toMatchSnapshot();
  });
  test("should be render icon basic", () => {
    const { container } = render(
      <UISvgIcon
        name={IconEnum.Plus}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
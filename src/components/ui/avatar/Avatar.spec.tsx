import React from "react";
import { render, cleanup } from "@testing-library/react";
import { UIAvatar } from "./Avatar";

describe(" <UIAvatar />", () => {
  afterEach(cleanup);
  test("should be render avatar basic", () => {
    const src =
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb";
    const { queryByTestId, container } = render(<UIAvatar src={src} />);
    const img = queryByTestId("image-element") as HTMLImageElement;
    expect(img.src).toContain(src);
  });
});

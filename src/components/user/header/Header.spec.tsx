import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UserHeader } from "./Header";

describe(" <UserHeader />", () => {
  afterEach(cleanup);
  const onChangeText = jest.fn();
  const onAddUser = jest.fn();
  test("should be render user header basic", () => {
    const { container } = render(
      <UserHeader onChangeText={onChangeText} onAddUser={onAddUser} />
    );
    expect(container.firstChild).toHaveClass("container");
  });
});

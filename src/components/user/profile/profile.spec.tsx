import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UserProfile } from "./profile";

describe(" <UserProfile />", () => {
  afterEach(cleanup);
  const onChangeText = jest.fn();
  const onAddUser = jest.fn();
  test("should be render user profile basic", () => {
    const { container } = render(
      <UserProfile
        name="Maria Lourdes"
        avatar="https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?h=350&auto=compress&cs=tinysrgb"
      />
    );
    expect(container.firstChild).toHaveClass("container");
  });
});

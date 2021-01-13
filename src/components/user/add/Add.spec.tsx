import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UserAdd } from "./Add";
import { User } from "src/models/user";

describe(" <UserAdd />", () => {
  afterEach(cleanup);
  const onAdd = jest.fn();
  const onClose = jest.fn();
  let user: User;
  beforeEach(() => {
    user = {
      name: "Juan Viloria",
      description: "Descripcion de usuario",
      photo:
        "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb",
    };
  });
  test("should be render user add mopal basic", () => {
    const { getByText, getByTestId } = render(
      <UserAdd onAdd={onAdd} onClose={onClose} user={user} />
    );
    expect(getByText(/Agregar nuevo contacto/i)).toBeInTheDocument();
    const btn = getByTestId("submit-btn-element") as HTMLButtonElement;
    expect(btn).toHaveClass("beetrack-btn-primary");
  });
  test("should be close mopal basic", () => {
    const { getByTestId } = render(
      <UserAdd onAdd={onAdd} onClose={onClose} user={user} />
    );
    const btnClose = getByTestId("svg-element") as HTMLButtonElement;
    fireEvent.click(btnClose);
    expect(onClose).toHaveBeenCalled();
  });
});

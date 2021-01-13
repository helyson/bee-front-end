import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { UserList } from "./List";
import { User } from "src/models/user";

describe(" <UserList />", () => {
  afterEach(cleanup);
  let users: User[];
  const onRemoveUser = jest.fn();
  beforeEach(() => {
    users = [
      {
        id: 1,
        name: "Francisco",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        photo:
          "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb",
      },
      {
        id: 2,
        name: "Pedro",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photo:
          "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb",
      },
    ];
  });
  test("should be render user list basic", () => {
    const { container } = render(
      <UserList onRemoveUser={onRemoveUser} users={[]} />
    );
    expect(container.firstChild).toHaveClass("container");
  });
  test("should be render user list with data and call remove event", () => {
    const { getByText } = render(
      <UserList onRemoveUser={onRemoveUser} users={users} />
    );
    const row = screen.getByText("Francisco").closest("tr");
    if(row){
        fireEvent.mouseOver(row);
        const btnDelete = getByText(/Eliminar/i);
        fireEvent.click(btnDelete)
        expect(onRemoveUser).toHaveBeenCalledWith(1)
    }
    expect(row).toBeInTheDocument();
  });
});

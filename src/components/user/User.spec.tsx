import React from "react";
import { render, cleanup, fireEvent, act } from "src/utils";
import { UserMain } from "./User";
import { store } from "src/redux/store";

describe(" <UserMain />", () => {
  let wrapper: any;
  let dispatchSpy: any;
  afterEach(cleanup);
  beforeEach(async () => {
    dispatchSpy = jest.spyOn(store, "dispatch");
    await act(async () => {
      wrapper = render(<UserMain />);
    });
  });
  test("renders main component", async () => {
    expect(dispatchSpy).toHaveBeenCalled();
  });
  
  test("should be open modal create", async () => {
    const { container,getByText } = wrapper;
    const addUser = getByText(/Nuevo Contacto/i);
    expect(addUser).toBeInTheDocument();
    fireEvent.click(addUser);
    expect(container.firstChild).toHaveClass('beetrack-container-modal');
  });
  test("should be search text", async () => {
    const { getByLabelText } = wrapper;
    const input = getByLabelText(/input/i, { selector: "input" });
    const onChange = { target: { value: "change text info" } };
    expect(input.value).toBe("");
    fireEvent.focus(input);
    fireEvent.change(input, onChange);
    expect(input.value).toBe("change text info");
  });
  test("should be table", async () => {
    const { getByTestId } = wrapper;
    const table = getByTestId('table-element') as HTMLTableElement;
    expect(table.rows.length).toEqual(1);
  });
  test("should be footer", async () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("pagination-element")).toBeInTheDocument();
  });
});

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UserFooter } from "./Footer";

describe(" <UserFooter/>", () => {
  afterEach(cleanup);
  const onChangePage = jest.fn();
  test("should be render pagination basic", () => {
    const { getByText, getByTestId } = render(
      <UserFooter onChangePage={onChangePage} hasNextPage hasPreviewPage />
    );
    const btnPrevious=getByText(/Página anterior/i)
    const btnNext=getByText(/Siguiente página/i)
    expect(btnPrevious).toBeInTheDocument();
    expect(btnNext).toBeInTheDocument();
    fireEvent.click(btnNext)
    expect(onChangePage).toHaveBeenCalledWith(true)
    fireEvent.click(btnPrevious)
    expect(onChangePage).toHaveBeenCalledWith(false)
  });
});

import React from "react";
import { render, cleanup, screen, within } from "@testing-library/react";
import { UITable } from "./Table";
import { Column } from "src/models/ui";

describe(" <UITable />", () => {
  afterEach(cleanup);
  const data: any[] = [
    {
      id: 1,
      name: "Felipe",
      lastname: "Axtell",
      address: "Calle San ignacio de loyola 4800",
    },
    {
      id: 2,
      name: "Andres",
      lastname: "Villegas",
      address: "Santiago de chile",
    },
    {
      id: 3,
      name: "Pedro",
      lastname: "Gonzalez",
      address: "Santiago de chile",
    },
  ];
  const columns: Column<any>[] = [
    {
      key: "name",
      label: "Nombre",
      width: "25%",
      render: ({ name }) => name,
    },
    {
      key: "lastname",
      label: "Apellido",
      width: "25%",
      render: ({ lastname }) => <span>{lastname}</span>,
    },
    {
      key: "address",
      label: "Dirección",
      width: "50%",
      render: ({ address }) => <span>{address}</span>,
    },
  ];
  test("should be render table basic", () => {
    const { container } = render(
      <UITable<any> columns={columns} data={data} />
    );
    expect(container.firstChild).toHaveClass(
      "beetrack-bg-white beetrack-bg-white beetrack-text-graydark"
    );
  });
});

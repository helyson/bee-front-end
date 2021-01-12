import React from "react";
import { StoryBookWrapper } from "src/helper";
import { Column } from "src/models/ui";

import { UITable } from "./Table";

export default {
  title: "UI Table",
  component: UITable,
};
interface Information {
  id: number;
  name: string;
  lastname: string;
  address: string;
}
const data: Information[] = [
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
export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UITable<Information> data={data} columns={columns} />
  </StoryBookWrapper>
);

import React, { useState } from "react";
import { Column } from "src/models/ui";

interface Row {
  columns: Column<any>[];
  info: any;
}
const UITableRow: React.FC<Row> = ({ columns, info }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <tr
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {columns.map(({ key, render }) => (
        <td key={key}>{render(info, isHover)}</td>
      ))}
    </tr>
  );
};
export { UITableRow };

import React from "react";
import { Column } from "src/models/ui";
import { UITableRow } from "./row/Row";
import styles from "./Table.module.scss";

interface TableProps {
  columns: Column<any>[];
  data: any[];
}

const UITable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className={`${styles.container} beetrack-bg-white beetrack-text-graydark`}>
      <thead>
        <tr>
          {columns.map(({ key, label, width }) => (
            <th key={key} style={{ width: `${width || ""}` }}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((info) => (
          <UITableRow columns={columns} key={info.id} info={info}/>
        ))}
      </tbody>
    </table>
  );
};

export { UITable };

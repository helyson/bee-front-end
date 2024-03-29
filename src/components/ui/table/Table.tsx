import React from "react";
import { Column } from "src/models/ui";
import { UITableRow } from "./row/Row";
import styles from "./Table.module.scss";

interface TableProps<T> {
  columns: Column<T>[]
  data: T[] 
}

 const UITable: <T>(p: TableProps<T>) => React.ReactElement =({ columns, data }) => {
  return (
    <table data-testid="table-element" className={`${styles.container} beetrack-bg-white beetrack-text-graydark`}>
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
        {data.map((info, $index) => (
          <UITableRow columns={columns} key={$index} info={info}/>
        ))}
      </tbody>
    </table>
  );
};

export { UITable };

import { ReactNode } from "react";

interface Column<T> {
  key: string;
  label: string;
  width?: string
  render: (record: T, isHover?:boolean) => ReactNode;
}

export type { Column };

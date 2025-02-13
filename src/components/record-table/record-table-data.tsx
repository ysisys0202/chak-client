import React from "react";
import { recordTableDataStyle } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const RecordTableData = ({ className, children }: Props) => {
  return (
    <div className={`${recordTableDataStyle} ${className}`}>{children}</div>
  );
};

export default RecordTableData;

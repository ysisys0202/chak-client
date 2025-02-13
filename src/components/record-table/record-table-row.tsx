import React from "react";
import { recordTableRowStyle } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const RecordTableRow = ({ className, children }: Props) => {
  return (
    <div className={`${recordTableRowStyle} ${className}`}>{children}</div>
  );
};

export default RecordTableRow;

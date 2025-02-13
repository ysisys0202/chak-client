import React from "react";
import { recordTableHeaderStyle } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const RecordTableHeader = ({ className, children }: Props) => {
  return (
    <div className={`${recordTableHeaderStyle} ${className}`}>{children}</div>
  );
};

export default RecordTableHeader;

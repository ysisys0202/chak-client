import { Button } from "chak-blocks/plain";
import React from "react";
import { paginationStyles } from "./style.css";

type Props = {
  pageLength: number;
  currentPage: number;
  className?: string;
};

const Pagination = ({ pageLength, currentPage, className }: Props) => {
  return (
    <div className={`${paginationStyles.self} ${className}`}>
      {Array.from({ length: pageLength }, (_, index) => (
        <Button
          key={index + 1}
          variant={index + 1 === currentPage ? "contained" : "outlined"}
          theme="dark"
          size="sm"
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;

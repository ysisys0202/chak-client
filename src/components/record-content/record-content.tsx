"use client";

import React from "react";
import { recordContentStyles } from "./style.css";
import BookTable from "@/components/record-content/book-table";
import RecordTable from "@/components/record-content/record-table";

const RecordContent = () => {
  return (
    <div className={recordContentStyles.self}>
      <BookTable />
      <RecordTable />
    </div>
  );
};

export default RecordContent;

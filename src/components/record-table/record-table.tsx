"use client";

import React from "react";
import { RecordData } from "@/util/validation/record";
import { BookData } from "@/providers/record-form";
import RecordTableHeader from "@/components/record-table/record-table-header";
import RecordTableData from "@/components/record-table/record-table-data";
import RecordTableRow from "@/components/record-table/record-table-row";
import { recordTableStyles } from "./style.css";

const bookFields: { id: keyof BookData; label: string }[] = [
  {
    id: "title",
    label: "책 제목",
  },
  {
    id: "author",
    label: "작가",
  },
  {
    id: "publisher",
    label: "출판사",
  },
  {
    id: "pubdate",
    label: "출간일",
  },
  {
    id: "isbn",
    label: "ISBN",
  },
];

const recordFields: { id: keyof RecordData; label: string }[] = [
  {
    id: "title",
    label: "제목",
  },
  {
    id: "readingState",
    label: "독서 상황",
  },
  {
    id: "rating",
    label: "별점",
  },
  {
    id: "recordDetail",
    label: "상세 기록",
  },
];

type Props = {
  renderLabel: ({
    label,
    id,
  }: {
    label: string;
    id: keyof BookData | keyof RecordData;
  }) => string | React.ReactNode;
  renderBookCoverImage: () => string | React.ReactNode;
  renderBookData: (filedId: keyof BookData) => string | React.ReactNode;
  renderRecordData: (filedId: keyof RecordData) => string | React.ReactNode;
};

const RecordTable = ({
  renderLabel,
  renderBookCoverImage,
  renderBookData,
  renderRecordData,
}: Props) => {
  return (
    <div className={recordTableStyles.self}>
      <div className={recordTableStyles.bookTable}>
        <div className={recordTableStyles.imageCell}>
          <div className={recordTableStyles.bookCoverImage}>
            {renderBookCoverImage?.()}
          </div>
        </div>
        <div className={recordTableStyles.bookInfo}>
          {bookFields.map(({ id, label }) => (
            <RecordTableRow key={id}>
              <RecordTableHeader>
                {renderLabel?.({ id, label })}
              </RecordTableHeader>
              <RecordTableData>{renderBookData?.(id)}</RecordTableData>
            </RecordTableRow>
          ))}
        </div>
      </div>
      {recordFields.map(({ id, label }) => {
        return (
          <RecordTableRow key={id}>
            <RecordTableHeader>
              {renderLabel?.({ id, label })}
            </RecordTableHeader>
            <RecordTableData>{renderRecordData?.(id)}</RecordTableData>
          </RecordTableRow>
        );
      })}
    </div>
  );
};

export default RecordTable;

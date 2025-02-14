"use client";

import React from "react";
import { RecordDetail } from "@/types/record";
import RecordTableHeader from "@/components/record-table/record-table-header";
import RecordTableData from "@/components/record-table/record-table-data";
import RecordTableRow from "@/components/record-table/record-table-row";
import { recordTableStyles } from "./style.css";

const bookFields = [
  {
    id: "bookTitle",
    label: "책 제목",
    type: "text",
  },
  {
    id: "bookAuthor",
    label: "작가",
    type: "text",
  },
  {
    id: "bookPublisher",
    label: "출판사",
    type: "text",
  },
  {
    id: "bookGenre",
    label: "장르",
    type: "text",
  },
  {
    id: "pageCount",
    label: "페이지 수",
    type: "text",
  },
];

const recordFields = [
  {
    id: "title",
    label: "제목",
    type: "text",
  },
  {
    id: "readingStatus",
    label: "독서 상황",
    type: "select",
    options: [
      { value: "pre-reading", name: "읽기 전" },
      { value: "reading", name: "읽는 중" },
      { value: "stop", name: "중단" },
      { value: "done", name: "완독" },
    ],
  },
  {
    id: "rating",
    label: "별점",
    type: "select",
    options: Array.from({ length: 10 }, (_, index) => ({
      value: index + 1,
      name: index + 1,
    })),
  },
  {
    id: "recordDetail",
    label: "상세 기록",
    type: "textarea",
  },
];

type RenderRecordData = ({
  fieldId,
  inputType,
  options,
}: {
  fieldId: keyof RecordDetail;
  inputType: string;
  options?: any[];
}) => string | React.ReactNode;

type Props = {
  renderLabel: ({
    label,
    id,
  }: {
    label: string;
    id?: string;
  }) => string | React.ReactNode;
  renderBookCoverImage: () => string | React.ReactNode;
  renderBookData: RenderRecordData;
  renderRecordData: RenderRecordData;
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
          {bookFields.map(({ id, label, type }) => (
            <RecordTableRow key={id}>
              <RecordTableHeader>
                {renderLabel?.({ id, label })}
              </RecordTableHeader>
              <RecordTableData>
                {renderBookData?.({
                  fieldId: id as keyof RecordDetail,
                  inputType: type,
                })}
              </RecordTableData>
            </RecordTableRow>
          ))}
        </div>
      </div>
      {recordFields.map(({ id, label, type, options }) => {
        return (
          <RecordTableRow key={id}>
            <RecordTableHeader>
              {renderLabel?.({ id, label })}
            </RecordTableHeader>
            <RecordTableData>
              {renderRecordData?.({
                fieldId: id as keyof RecordDetail,
                inputType: type,
                options,
              })}
            </RecordTableData>
          </RecordTableRow>
        );
      })}
    </div>
  );
};

export default RecordTable;

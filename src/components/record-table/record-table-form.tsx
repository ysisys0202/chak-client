"use client";

import React from "react";
import RecordTable from "./record-table";
import Image from "next/image";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

const recordData = {
  id: 1,
  title: "좋은 책",
  readingStatus: "reading",
  rating: 10,
  recordDetail: "너무 재밌어요!",
  bookId: 1,
  bookTitle: "소스 코드:더 비기닝",
  bookAuthor: "빌 게이츠",
  bookPublisher: "조은 출판",
  bookGenre: "전기",
  pageCount: "500",
};

const RecordTableForm = () => {
  const { register } = useForm();
  return (
    <form action="">
      <RecordTable
        renderLabel={({ label, id }) => <label htmlFor={id}>{label}</label>}
        renderBookCoverImage={() => (
          <button type="button">
            <Image
              src="https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg"
              alt="책 표지"
              fill
            />
            <input type="text" readOnly disabled hidden />
          </button>
        )}
        renderBookData={({ fieldId, inputType, options }) => (
          <input type={inputType} readOnly disabled />
        )}
        renderRecordData={({ fieldId, inputType, options }) => {
          if (inputType === "textarea") {
            return <TextareaAutosize />;
          }
          if (inputType === "select") {
            return (
              <select name={fieldId} id={fieldId}>
                {options?.map(({ value, name }) => (
                  <option value={value}>{name}</option>
                ))}
              </select>
            );
          }
          return <input type={inputType} />;
        }}
      />
    </form>
  );
};

export default RecordTableForm;

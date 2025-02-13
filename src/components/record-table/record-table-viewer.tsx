"use client";

import React from "react";
import RecordTable from "./record-table";
import Image from "next/image";
import { RatingStar } from "chak-blocks/plain";

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

const RecordTableViewer = () => {
  return (
    <RecordTable
      renderLabel={({ label }) => label}
      renderBookCoverImage={() => (
        <Image
          src="https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg"
          alt="책 표지"
          fill
        />
      )}
      renderBookData={({ fieldId }) => recordData[fieldId]}
      renderRecordData={({ fieldId }) => recordData[fieldId]}
    />
  );
};

export default RecordTableViewer;

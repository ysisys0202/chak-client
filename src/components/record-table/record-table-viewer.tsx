"use client";

import React from "react";
import Image from "next/image";
import RecordTable from "./record-table";
import { useParams } from "next/navigation";
import { useRecordQuery } from "@/query/record";
import { BookData } from "@/providers/record-form";

const RecordTableViewer = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data } = useRecordQuery(id);
  const bookData: BookData = data
    ? {
        id: data.bookId,
        title: data.title,
        image: data.bookImage,
        publisher: data.bookPublisher,
        author: data.bookAuthor,
        pubdate: "",
        link: "",
        discount: "",
        isbn: "",
        description: "",
      }
    : {
        id: NaN,
        title: "",
        image: "",
        publisher: "",
        author: "",
        pubdate: "",
        link: "",
        discount: "",
        isbn: "",
        description: "",
      };

  const recordData = {
    bookId: data?.bookId,
    userId: data?.userId,
    title: data?.title,
    readingState: data?.readingStatus,
    rating: data?.rating,
    recordDetail: data?.RecordDetail,
    isPublic: data?.isPublic,
  };

  return (
    <RecordTable
      renderLabel={({ label }) => label}
      renderBookCoverImage={() => (
        <Image
          src={data?.bookImage || ""}
          alt={`${data?.title} 책 표지`}
          fill
        />
      )}
      renderBookData={(fieldId) => bookData[fieldId]}
      renderRecordData={(fieldId) => recordData[fieldId]}
    />
  );
};

export default RecordTableViewer;

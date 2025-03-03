import RecordViewer from "@/components/record/viewer/record-viewer";
import { ReadingStates } from "@/types/record";
import React from "react";

const Loading = () => {
  const record = {
    id: 0,
    userId: 0,
    readingState: "pre-rading" as ReadingStates,
    title: "데이터 불러오는 중",
    recordDetail: "데이터 불러오는 중",
    isPublic: false,
    createdAt: "",
    updatedAt: "",
    userNickname: "데이터 불러오는 중",
    bookId: 0,
    bookTitle: "데이터 불러오는 중",
    bookAuthor: "데이터 불러오는 중",
    bookPublisher: "데이터 불러오는 중",
    bookImage: "/image/book_cover_placeholder.jpg",
    bookIsbn: "데이터 불러오는 중",
    bookPubdate: "데이터 불러오는 중",
  };
  return (
    <main>
      <RecordViewer record={record} />
    </main>
  );
};

export default Loading;

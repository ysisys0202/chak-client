"use client";

import { useParams } from "next/navigation";
import { recordFields } from "@/constants/record";
import { readingStateMessage } from "@/constants/message";
import { BookData } from "@/providers/record-form";
import { useRecordQuery } from "@/query/record";
import { formatShortDate } from "@/util/common";
import BookCoverImage from "@/components/book/cover-image/cover-image";
import BookInfo from "@/components/record/viewer/book-info/book-info";
import RecordRow from "@/components/record/viewer/row/record-viewer-row";
import RecordData from "@/components/record/viewer//data/record-viewer-data";
import RecordLabel from "@/components/record/viewer//label/record-viewer-label";
import RecordViewerTitle from "@/components/record/viewer//title/record-viewer-title";

const RecordViewer = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data } = useRecordQuery(id);
  const bookData: BookData = {
    id: data?.bookId || NaN,
    title: data?.bookTitle || "",
    image: data?.bookImage || "",
    publisher: data?.bookPublisher || "",
    author: data?.bookAuthor || "",
    pubdate: formatShortDate(data?.bookPubdate) || "",
    link: "",
    discount: "",
    isbn: data?.bookIsbn || "",
    description: "",
  };
  const recordData = {
    bookId: data?.bookId,
    userId: data?.userId,
    title: data?.title,
    readingState: data ? readingStateMessage[data.readingState] : "",
    rating: data?.rating,
    recordDetail: data?.recordDetail,
    isPublic: data?.isPublic,
  };
  return (
    <div>
      <RecordViewerTitle>책 정보</RecordViewerTitle>
      <BookInfo
        bookData={bookData}
        bookCoverImage={
          data ? (
            <BookCoverImage
              imageUrl={data.bookImage}
              alt={`${data.title} 책 표지`}
            />
          ) : (
            <BookCoverImage.Skeleton />
          )
        }
      />
      <RecordViewerTitle>기록 정보</RecordViewerTitle>
      {recordFields.map(({ id, label }) => (
        <RecordRow key={id}>
          <RecordLabel>{label}</RecordLabel>
          <RecordData>{recordData[id]}</RecordData>
        </RecordRow>
      ))}
    </div>
  );
};

export default RecordViewer;

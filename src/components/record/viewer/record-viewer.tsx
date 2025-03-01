import { recordFields } from "@/constants/record";
import { readingStateMessage } from "@/constants/message";
import { BookData } from "@/providers/record-form";
import { formatShortDate } from "@/util/common";
import BookCoverImage from "@/components/book/cover-image/cover-image";
import BookInfo from "@/components/record/viewer/book-info/book-info";
import RecordRow from "@/components/record/viewer/row/record-viewer-row";
import RecordData from "@/components/record/viewer//data/record-viewer-data";
import RecordLabel from "@/components/record/viewer//label/record-viewer-label";
import RecordViewerTitle from "@/components/record/viewer//title/record-viewer-title";
import { RecordItemResponse } from "@/types/record";

const RecordViewer = ({ record }: { record: RecordItemResponse }) => {
  const bookData: BookData = {
    id: record.bookId,
    title: record.bookTitle,
    image: record.bookImage,
    publisher: record.bookPublisher,
    author: record.bookAuthor,
    pubdate: formatShortDate(record.bookPubdate),
    link: "",
    discount: "",
    isbn: record.bookIsbn,
    description: "",
  };
  const recordData = {
    bookId: record.bookId,
    userId: record.userId,
    title: record.title,
    readingState: readingStateMessage[record.readingState],
    rating: record.rating,
    recordDetail: record.recordDetail,
    isPublic: record.isPublic,
  };
  return (
    <div>
      <RecordViewerTitle>책 정보</RecordViewerTitle>
      <BookInfo
        bookData={bookData}
        bookCoverImage={
          record ? (
            <BookCoverImage
              imageUrl={record.bookImage}
              alt={`${record.title} 책 표지`}
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

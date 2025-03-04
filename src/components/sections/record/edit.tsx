import { readingStateMessage } from "@/constants/message";
import { RecordItemResponse } from "@/types/record";
import { BookData, RecordFormProvider } from "@/providers/record-form";
import { formatShortDate } from "@/util/common";
import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordEditButtonGroup from "@/components/record/button/record-edit-button-group";
import BookSearchModal from "@/components/book/search/modal/modal";
import RecordForm from "@/components/record/form/record-form";
import { recordDetailSectionStyles } from "./style.css";

const RecordEditSection = ({ record }: { record: RecordItemResponse }) => {
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
    readingState: record.readingState,
    rating: record.rating || 0,
    recordDetail: record.recordDetail,
    isPublic: record.isPublic,
  };
  return (
    <Section>
      <SectionBody>
        <RecordFormProvider initBookData={bookData} initRecordData={recordData}>
          <RecordForm />
          <RecordEditButtonGroup
            className={recordDetailSectionStyles.buttonGroup}
          />
          {<BookSearchModal />}
        </RecordFormProvider>
      </SectionBody>
    </Section>
  );
};

export default RecordEditSection;

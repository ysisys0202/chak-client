"use client";

import { useParams, useSearchParams } from "next/navigation";
import { BookData, RecordFormProvider } from "@/providers/record-form";
import { useRecordQuery } from "@/query/record";
import { formatShortDate } from "@/util/common";
import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordEditButtonGroup from "@/components/record/button/record-edit-button-group";
import BookSearchModal from "@/components/book/search/modal/modal";
import { recordDetailSectionStyles } from "./style.css";
import RecordForm from "@/components/record/form/record-form";

const RecordEditSection = () => {
  const searchParmas = useSearchParams();
  const isModalOpen = !!searchParmas.get("book-search-modal");
  const { id } = useParams() as unknown as { id: number };
  const { data } = useRecordQuery(id);

  const bookData: BookData = {
    id: data?.bookId || NaN,
    title: data?.bookTitle || "",
    image: data?.bookImage || "",
    publisher: data?.bookPublisher || "",
    author: data?.bookAuthor || "",
    pubdate: data ? formatShortDate(data.bookPubdate) : "",
    link: "",
    discount: "",
    isbn: data?.bookIsbn || "",
    description: "",
  };

  const recordData = {
    bookId: data?.bookId || NaN,
    userId: data?.userId || NaN,
    title: data?.title || "",
    readingState: data?.readingState || "",
    rating: data?.rating || NaN,
    recordDetail: data?.recordDetail || "",
    isPublic: data?.isPublic || false,
  };
  return (
    <Section>
      <SectionBody>
        <RecordFormProvider initBookData={bookData} initRecordData={recordData}>
          <RecordForm />
          <RecordEditButtonGroup
            className={recordDetailSectionStyles.buttonGroup}
          />
          {isModalOpen && <BookSearchModal />}
        </RecordFormProvider>
      </SectionBody>
    </Section>
  );
};

export default RecordEditSection;

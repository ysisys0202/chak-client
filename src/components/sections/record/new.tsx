"use client";

import { useSearchParams } from "next/navigation";
import { RecordFormProvider } from "@/providers/record-form";
import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import BookSearchModal from "@/components/book/search/modal/modal";
import RecordNewButtonGroup from "@/components/record/button/record-new-button-group";
import { recordDetailSectionStyles } from "./style.css";
import RecordForm from "@/components/record/form/record-form";

const RecordEditSection = () => {
  const searchParmas = useSearchParams();
  const isModalOpen = !!searchParmas.get("book-search-modal");

  return (
    <Section>
      <SectionBody>
        <RecordFormProvider
          initBookData={{
            title: "책을 선택하면 자동으로 채워져요.",
            author: "책을 선택하면 자동으로 채워져요.",
            publisher: "책을 선택하면 자동으로 채워져요.",
            pubdate: "책을 선택하면 자동으로 채워져요.",
            isbn: "책을 선택하면 자동으로 채워져요.",
            link: "",
            image: "",
            discount: "",
            description: "",
            id: 0,
          }}
        >
          <RecordForm />
          <RecordNewButtonGroup
            className={recordDetailSectionStyles.buttonGroup}
          />
          {isModalOpen && <BookSearchModal />}
        </RecordFormProvider>
      </SectionBody>
    </Section>
  );
};

export default RecordEditSection;

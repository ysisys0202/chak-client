"use client";

import { useSearchParams } from "next/navigation";
import { RecordFormProvider } from "@/providers/record-form";
import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordTableForm from "@/components/record-table/record-table-form";
import BookSearchModal from "@/components/book/search/modal/modal";
import RecordNewButtonGroup from "@/components/record-table/record-new-button-group";
import { recordDetailSectionStyles } from "./style.css";

const RecordEditSection = () => {
  const searchParmas = useSearchParams();
  const isModalOpen = !!searchParmas.get("book-search-modal");

  return (
    <Section>
      <SectionBody>
        <RecordFormProvider>
          <RecordTableForm />
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

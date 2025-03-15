import queryKey from "@/constants/query-keys";
import { getAuthServer } from "@/api/server/auth";
import { RecordFormProvider } from "@/providers/record-form";
import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import BookSearchModal from "@/components/book/search/modal/modal";
import RecordForm from "@/components/record/form/record-form";
import RecordNewButtonGroup from "@/components/record/button/record-new-button-group";
import { recordDetailSectionStyles } from "./style.css";

const RecordNewSection = async () => {
  const user = await getAuthServer({
    fetchOptions: {
      cache: "force-cache",
      next: {
        tags: [queryKey.auth.me],
      },
    },
  });

  return (
    <Section>
      <SectionBody>
        <RecordFormProvider>
          <RecordForm user={user} />
          <RecordNewButtonGroup
            className={recordDetailSectionStyles.buttonGroup}
          />
          <BookSearchModal />
        </RecordFormProvider>
      </SectionBody>
    </Section>
  );
};

export default RecordNewSection;

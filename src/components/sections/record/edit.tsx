import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordEditButtonGroup from "@/components/record-table/record-edit-button-group";
import { recordDetailSectionStyles } from "./style.css";
import RecordTableForm from "@/components/record-table/record-table-form";

const RecordEditSection = () => {
  return (
    <Section>
      <SectionBody>
        <RecordTableForm />
        <RecordEditButtonGroup
          className={recordDetailSectionStyles.buttonGroup}
        />
      </SectionBody>
    </Section>
  );
};

export default RecordEditSection;

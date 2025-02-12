import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordContent from "@/components/record-content/record-content";
import ButtonGroup from "@/components/record-content/button-group";
import { recordDetailSectionStyles } from "./style.css";

const RecordDetailSection = () => {
  return (
    <Section>
      <SectionBody>
        <RecordContent />
        <ButtonGroup className={recordDetailSectionStyles.buttonGroup} />
      </SectionBody>
    </Section>
  );
};

export default RecordDetailSection;

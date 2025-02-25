import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordDetailButtonGroup from "@/components/record/button/record-detail-button-group";
import RecordViewer from "@/components/record/viewer/record-viewer";
import { recordDetailSectionStyles } from "./style.css";

const RecordDetailSection = () => {
  return (
    <Section>
      <SectionBody>
        <RecordViewer />
        <RecordDetailButtonGroup
          className={recordDetailSectionStyles.buttonGroup}
        />
      </SectionBody>
    </Section>
  );
};

export default RecordDetailSection;

import RecordContent from "@/components/record-content/record-content";
import Section from "../shared/section";
import SectionBody from "../shared/section-body";

const RecordDetailSection = () => {
  return (
    <Section>
      <SectionBody>
        <RecordContent />
      </SectionBody>
    </Section>
  );
};

export default RecordDetailSection;

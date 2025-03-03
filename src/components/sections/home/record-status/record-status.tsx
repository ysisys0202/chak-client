import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import RecordFolders from "@/components/sections/home/record-status/record-folders";
import { styles } from "./style.css";

const RecordStatusSection = () => {
  return (
    <Section>
      <SectionHeader title="독서 근황" />
      <SectionBody className={styles.body}>
        <RecordFolders />
      </SectionBody>
    </Section>
  );
};

export default RecordStatusSection;

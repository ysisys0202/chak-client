import Link from "next/link";
import path from "@/constants/path";
import { getRecordCountByReadingState } from "@/api/record";
import { getToken } from "@/util/auth";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import RecordFolder from "@/components/record/folder/record-folder";
import { styles } from "./style.css";

const RecordStatusSection = async () => {
  const token = await getToken();
  const data = await getRecordCountByReadingState({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <Section>
      <SectionHeader title="독서 근황" />
      <SectionBody className={styles.body}>
        <Link href={`${path.record}?reading-state=pre-reading`}>
          <RecordFolder
            title="읽고 싶어요"
            count={data?.["pre-reading"] || 0}
          />
        </Link>
        <Link href={`${path.record}?reading-state=reading`}>
          <RecordFolder title="읽고 있어요" count={data?.reading || 0} />
        </Link>
        <Link href={`${path.record}?reading-state=done`}>
          <RecordFolder title="다 읽었어요" count={data?.done || 0} />
        </Link>
      </SectionBody>
    </Section>
  );
};

export default RecordStatusSection;

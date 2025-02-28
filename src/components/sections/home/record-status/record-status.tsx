"use client";

import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import { styles } from "./style.css";
import RecordFolder from "@/components/record/folder/record-folder";
import { useRecordCountByReadingState } from "@/query/record";
import Link from "next/link";
import path from "@/constants/path";

const RecordStatusSection = () => {
  const { data } = useRecordCountByReadingState();

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

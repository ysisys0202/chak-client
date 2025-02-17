import Link from "next/link";
import { Button } from "chak-blocks/plain";
import path from "@/constants/path";
import { records } from "@/data/record";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import List from "@/components/shared/list/list";
import Pagination from "@/components/shared/pagination/pagination";
import RecordRow from "@/components/record-row/record-row";
import { recordListSectionStyles } from "./style.css";

const RecordListSection = () => {
  return (
    <Section>
      <SectionHeader title="나의 기록" />
      <SectionBody>
        <Link
          href={path.recordNew}
          className={recordListSectionStyles.newButton}
        >
          <Button theme="success">새 기록 추가</Button>
        </Link>

        <List>
          <RecordRow id="ID" title="제목" updatedAt="업데이트 날짜" header />
          {records.map(({ id, title, coverImageUrl, bookTitle, updatedAt }) => (
            <RecordRow
              id={id}
              title={title}
              coverImageUrl={coverImageUrl}
              bookTitle={bookTitle}
              updatedAt={updatedAt}
            />
          ))}
        </List>
        {/* <Pagination
          pageLength={5}
          currentPage={1}
          className={recordListSectionStyles.pagination}
        /> */}
      </SectionBody>
    </Section>
  );
};

export default RecordListSection;

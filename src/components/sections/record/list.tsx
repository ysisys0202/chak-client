import Link from "next/link";
import { Button } from "chak-blocks/plain";
import path from "@/constants/path";
import { RecordResponse } from "@/types/record";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import List from "@/components/shared/list/list";
import RecordRow from "@/components/record-row/record-row";
import RecordFilter from "@/components/record-list/ui/record-filter";
import RecordListPagination from "@/components/record-list/ui/record-list-pagination";
import { listStyles } from "./style.css";

const RecordListSection = ({ records }: { records: RecordResponse }) => {
  return (
    <Section>
      <SectionHeader title="나의 기록" />
      <SectionBody>
        <div className={listStyles.utilArea}>
          <RecordFilter />
          <Link href={path.recordNew}>
            <Button theme="success">새 기록 추가</Button>
          </Link>
        </div>
        <List>
          <RecordRow id="header" bookTitle="제목" updatedAt="작성일" header />
          {records.items?.map(({ id, bookImage, bookTitle, updatedAt }) => (
            <RecordRow
              key={id}
              id={id}
              coverImageUrl={bookImage}
              bookTitle={bookTitle}
              updatedAt={updatedAt}
            />
          ))}
        </List>
        <RecordListPagination
          total={records.total}
          display={records.display}
          className={listStyles.pagination}
        />
      </SectionBody>
    </Section>
  );
};

export default RecordListSection;

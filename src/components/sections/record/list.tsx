import { records } from "@/data/record";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import Pagination from "@/components/shared/pagination/pagination";
import RecordRow from "@/components/record-row/record-row";
import { recordListSectionStyles } from "./style.css";

const RecordListSection = () => {
  return (
    <Section>
      <SectionHeader title="나의 기록" />
      <SectionBody>
        <ul className={recordListSectionStyles.list}>
          <RecordRow
            id="ID"
            title="제목"
            coverImageUrl=""
            bookTitle=""
            updatedAt="업데이트 날짜"
          />
          {records.map(({ id, title, coverImageUrl, bookTitle, updatedAt }) => (
            <RecordRow
              id={id}
              title={title}
              coverImageUrl={coverImageUrl}
              bookTitle={bookTitle}
              updatedAt={updatedAt}
            />
          ))}
        </ul>
        <Pagination
          pageLength={5}
          currentPage={1}
          className={recordListSectionStyles.pagination}
        />
      </SectionBody>
    </Section>
  );
};

export default RecordListSection;

import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import RecordCard from "@/components/record-card/review-card/record-card";
import { recentRecordSectionStyles } from "./style.css";
import { records } from "@/data/record";

const RecordsEmpty = () => {
  return <div>"아직 작성된 기록이 없어요"</div>;
};

const RecentRecordsSection = () => {
  const isEmpty = records.length === 0;
  return (
    <Section>
      <SectionHeader
        title="최근 기록 📚"
        description="기록을 차곡 차곡 쌓아보세요"
      />
      <SectionBody>
        {
          <>
            {isEmpty && <RecordsEmpty />}
            {!isEmpty && (
              <ul className={recentRecordSectionStyles.list}>
                {records.map(
                  ({
                    id,
                    title,
                    description,
                    coverImageUrl,
                    bookTitle,
                    updatedAt,
                    rating,
                  }) => (
                    <li key={id}>
                      <RecordCard
                        id={id}
                        title={title}
                        description={description}
                        coverImageUrl={coverImageUrl}
                        bookTitle={bookTitle}
                        updatedAt={updatedAt}
                        rating={rating}
                      />
                    </li>
                  )
                )}
              </ul>
            )}
          </>
        }
      </SectionBody>
    </Section>
  );
};

export default RecentRecordsSection;

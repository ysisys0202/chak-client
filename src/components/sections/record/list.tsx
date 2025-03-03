import Link from "next/link";
import { Button } from "chak-blocks/plain";
import path from "@/constants/path";
import { ReadingStates } from "@/types/record";
import { getAuth } from "@/api/auth";
import { getRecords } from "@/api/record";
import { getToken } from "@/util/auth";
import withSuspense from "@/components/hocs/withSuspense";
import Error from "@/components/error/error";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import List from "@/components/shared/list/list";
import RecordRow from "@/components/record-row/record-row";
import RecordFilter from "@/components/record-list/ui/record-filter";
import RecordListPagination from "@/components/record-list/ui/record-list-pagination";
import { listStyles } from "./style.css";

const display = 10;

const SuspenseListSection = () => {
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
          {Array.from({ length: display }, (_, index) => (
            <RecordRow.Skeleton key={index} />
          ))}
        </List>
        <RecordListPagination
          total={5}
          display={10}
          className={listStyles.pagination}
        />
      </SectionBody>
    </Section>
  );
};

const RecordListSection = async ({
  searchParams,
}: {
  searchParams: { page?: string; "reading-state"?: ReadingStates };
}) => {
  const page = Number(searchParams.page) || 1;

  const readingState = searchParams["reading-state"];
  const start = (page - 1) * display + 1;

  try {
    const token = await getToken();
    const user = await getAuth({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const records = await getRecords(
      {
        userId: user.id,
        start: start - 1,
        display,
        readingState,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
  } catch (error) {
    console.error("Error fetching records:", error);
    return <Error />;
  }
};

export default withSuspense(RecordListSection, <SuspenseListSection />);

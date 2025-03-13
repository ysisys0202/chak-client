import { ReadingStates } from "@/types/record";
import { getAuthServer } from "@/api//server/auth";
import { getRecordsServer } from "@/api/server/record";
import List from "@/components/shared/list/list";
import RecordRow from "@/components/record/row/record-row";

const display = 10;

const RecordList = async ({
  searchParams,
}: {
  searchParams: { page?: string; "reading-state"?: ReadingStates };
}) => {
  const page = Number(searchParams.page) || 1;

  const readingState = searchParams["reading-state"];
  const start = (page - 1) * display + 1;

  const user = await getAuthServer();

  const records = await getRecordsServer({
    userId: user.id,
    start: start - 1,
    display,
    readingState,
  });

  return (
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
  );
};

export default RecordList;

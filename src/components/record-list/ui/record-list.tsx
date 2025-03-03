import { ReadingStates } from "@/types/record";
import { getToken } from "@/util/auth";
import { getAuth } from "@/api/auth";
import { getRecords } from "@/api/record";
import List from "@/components/shared/list/list";
import RecordRow from "@/components/record-row/record-row";

const display = 10;

const RecordList = async ({
  searchParams,
}: {
  searchParams: { page?: string; "reading-state"?: ReadingStates };
}) => {
  const page = Number(searchParams.page) || 1;

  const readingState = searchParams["reading-state"];
  const start = (page - 1) * display + 1;
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

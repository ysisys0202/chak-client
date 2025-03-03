import { ReadingStates } from "@/types/record";
import { getAuth } from "@/api/auth";
import { getRecords } from "@/api/record";
import { getToken } from "@/util/auth";
import RecordListSection from "@/components/sections/record/list";
import Error from "@/components/error/error";

const display = 10;

export const dynamic = "force-dynamic";

const RecordListPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; "reading-state"?: ReadingStates }>;
}) => {
  try {
    const token = await getToken();
    const queryParams = await searchParams;
    const page = Number(queryParams.page) || 1;

    const readingState = await queryParams["reading-state"];
    const start = (page - 1) * display + 1;

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

    return <main>{<RecordListSection records={records} />}</main>;
  } catch (error) {
    console.error("Error fetching records:", error);
    return <Error />;
  }
};

export default RecordListPage;

import { ReadingStates } from "@/types/record";
import RecordListSection from "@/components/sections/record/list";

export const dynamic = "force-dynamic";

const RecordListPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; "reading-state"?: ReadingStates }>;
}) => {
  const queryParams = await searchParams;
  return <main>{<RecordListSection searchParams={queryParams} />}</main>;
};

export default RecordListPage;

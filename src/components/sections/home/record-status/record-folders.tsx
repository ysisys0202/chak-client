import Link from "next/link";
import path from "@/constants/path";
import { getRecordCountByReadingStateServer } from "@/api/server/record";
import RecordFolder from "@/components/record/folder/record-folder";
import withSuspense from "@/components/hocs/withSuspense";

const SuspenseRecordFolers = () => {
  return (
    <>
      <RecordFolder title="읽고 싶어요" count={0} />
      <RecordFolder title="읽고 있어요" count={0} />
      <RecordFolder title="다 읽었어요" count={0} />
    </>
  );
};

const RecordFolders = async () => {
  const data = await getRecordCountByReadingStateServer();
  return (
    <>
      <Link href={`${path.record}?reading-state=pre-reading`}>
        <RecordFolder title="읽고 싶어요" count={data["pre-reading"] || 0} />
      </Link>
      <Link href={`${path.record}?reading-state=reading`}>
        <RecordFolder title="읽고 있어요" count={data.reading || 0} />
      </Link>
      <Link href={`${path.record}?reading-state=done`}>
        <RecordFolder title="다 읽었어요" count={data.done || 0} />
      </Link>
    </>
  );
};

export default withSuspense(RecordFolders, <SuspenseRecordFolers />);

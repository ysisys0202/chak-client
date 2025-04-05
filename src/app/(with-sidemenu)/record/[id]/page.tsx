import { forbidden } from "next/navigation";
import { getRecordServer } from "@/api/server/record";
import RecordDetailSection from "@/components/sections/record/detail";
import { FetchError } from "@/util/error";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const record = await getRecordServer(Number(id));

  return {
    title: `${record.bookTitle} 기록 | 책에 관한 모든 기억을 Chak`,
    description: `${record.bookTitle} 기록 페이지`,
    openGraph: {
      title: `${record.bookTitle} | 책에 관한 모든 기억을 Chak`,
      description: `${record.bookTitle} 기록 페이지`,
      images: [record.bookImage],
    },
  };
};

const RecordDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  try {
    const record = await getRecordServer(Number(id));
    return (
      <main>
        <RecordDetailSection record={record} />
      </main>
    );
  } catch (error) {
    if (error instanceof FetchError) {
      if (error.status === 403) {
        forbidden();
      }
    }
  }
};

export default RecordDetailPage;

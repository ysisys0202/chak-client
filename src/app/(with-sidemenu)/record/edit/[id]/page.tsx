import { forbidden } from "next/navigation";
import axios from "axios";
import { getRecordServer } from "@/api/server/record";
import RecordEditSection from "@/components/sections/record/edit";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const record = await getRecordServer(Number(id));

  return {
    title: `${record.bookTitle} 수정 | 책에 관한 모든 기억을 Chak`,
    description: `${record.bookTitle} 수정 페이지`,
    openGraph: {
      title: `${record.bookTitle} 수정 | 책에 관한 모든 기억을 Chak`,
      description: `{record.bookTitle} 수정 페이지`,
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
        <RecordEditSection record={record} />
      </main>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        forbidden();
      }
    }
  }
};

export default RecordDetailPage;

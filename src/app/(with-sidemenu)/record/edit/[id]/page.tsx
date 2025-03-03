import { forbidden } from "next/navigation";
import axios from "axios";
import { getRecord } from "@/api/record";
import { getToken } from "@/util/auth";
import RecordEditSection from "@/components/sections/record/edit";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const token = await getToken();
  const { id } = await params;

  const record = await getRecord(Number(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

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
  const token = await getToken();
  const { id } = await params;

  try {
    const record = await getRecord(Number(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

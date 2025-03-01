import { forbidden } from "next/navigation";
import { getRecord } from "@/api/record";
import { getToken } from "@/util/auth";
import RecordDetailSection from "@/components/sections/record/detail";
import axios from "axios";

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
        <RecordDetailSection record={record} />
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

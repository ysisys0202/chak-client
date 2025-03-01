import { forbidden } from "next/navigation";
import axios from "axios";
import { getRecord } from "@/api/record";
import { getToken } from "@/util/auth";
import RecordEditSection from "@/components/sections/record/edit";

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

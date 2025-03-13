"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "chak-blocks/plain";
import { revalidateRecords } from "@/actions/revalidate-records.action";
import path from "@/constants/path";
import { useDeleteRecordMutation } from "@/query/record";
import { handleConfirm } from "@/util/common";
import ButtonGroup from "@/components/record/button/button-group";

const RecordDetailButtonGroup = ({ className }: { className?: string }) => {
  const { id } = useParams();
  const { mutateAsync, isPending } = useDeleteRecordMutation();

  const handleDelete = () => {
    handleConfirm(
      "삭제된 기록은 복구할 수 없습니다. 정말 삭제하시겠습니까?",
      async () => {
        await mutateAsync(Number(id));
        setTimeout(() => {
          revalidateRecords();
        }, 1000);
      }
    );
  };

  return (
    <ButtonGroup className={className}>
      <Link href={`${path.recordEdit}/${id}`}>
        <Button theme="primary" as="div">
          수정하기
        </Button>
      </Link>
      <Button
        theme="error"
        variant="outlined"
        onClick={handleDelete}
        disabled={isPending}
      >
        삭제하기
      </Button>
    </ButtonGroup>
  );
};

export default RecordDetailButtonGroup;

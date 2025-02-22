"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "chak-blocks/plain";
import path from "@/constants/path";
import { useDeleteRecordMutation } from "@/query/record";
import ButtonGroup from "./button-group";

const RecordDetailButtonGroup = ({ className }: { className?: string }) => {
  const { id } = useParams();
  const { mutate } = useDeleteRecordMutation();

  const handleDelete = () => {
    const deleteConfirm = confirm(
      "삭제된 기록은 복구할 수 없습니다. 정말 삭제하시겠습니까?"
    );
    if (deleteConfirm) {
      mutate(id as unknown as number);
    }
  };
  return (
    <ButtonGroup className={className}>
      <Link href={`${path.recordEdit}/${id}`}>
        <Button theme="primary" as="div">
          수정하기
        </Button>
      </Link>
      <Button theme="error" variant="outlined" onClick={handleDelete}>
        삭제하기
      </Button>
    </ButtonGroup>
  );
};

export default RecordDetailButtonGroup;

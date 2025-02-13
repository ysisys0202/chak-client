import { Button } from "chak-blocks/plain";
import ButtonGroup from "./button-group";
import Link from "next/link";
import path from "@/constants/path";

const RecordDetailButtonGroup = ({ className }: { className?: string }) => {
  return (
    <ButtonGroup className={className}>
      <Link href={`${path.recordEdit}/1`}>
        <Button theme="primary" as="div">
          수정하기
        </Button>
      </Link>
      <Button theme="error" variant="outlined">
        삭제하기
      </Button>
    </ButtonGroup>
  );
};

export default RecordDetailButtonGroup;

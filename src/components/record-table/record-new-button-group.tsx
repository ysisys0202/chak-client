import { useParams, useRouter } from "next/navigation";
import { Button } from "chak-blocks/plain";
import { RecordData } from "@/util/validation/record";
import { useRecordFormContext } from "@/providers/record-form";
import { useCreateRecordMutation } from "@/query/record";
import ButtonGroup from "./button-group";

const RecordEditButtonGroup = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { id } = useParams() as unknown as { id: number };
  const {
    formMethods: { handleSubmit },
  } = useRecordFormContext();
  const { mutate } = useCreateRecordMutation();

  const handleSave = (data: RecordData) => mutate(data);
  const handleBack = () => {
    router.back();
  };

  return (
    <ButtonGroup className={className}>
      <Button theme="primary" onClick={handleSubmit(handleSave)}>
        저장하기
      </Button>
      <Button theme="dark" variant="outlined" onClick={handleBack}>
        뒤로가기
      </Button>
    </ButtonGroup>
  );
};

export default RecordEditButtonGroup;

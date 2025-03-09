"use client";

import { useRouter } from "next/navigation";
import { FieldErrors } from "react-hook-form";
import { Button } from "chak-blocks/plain";
import { useToast } from "chak-blocks/context";
import { RecordData } from "@/util/validation/record";
import { useRecordFormContext } from "@/providers/record-form";
import { useCreateRecordMutation } from "@/query/record";
import ButtonGroup from "@/components/record/button/button-group";

const RecordEditButtonGroup = ({ className }: { className?: string }) => {
  const router = useRouter();
  const {
    formMethods: { handleSubmit },
  } = useRecordFormContext();
  const { mutate, isPending } = useCreateRecordMutation();
  const { open } = useToast();

  const handleSave = (data: RecordData) => mutate(data);
  const handleFormInvalid = (errors: FieldErrors<RecordData>) => {
    open({ title: Object.values(errors)[0].message, status: "error" });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <ButtonGroup className={className}>
      <Button
        theme="primary"
        onClick={handleSubmit(handleSave, handleFormInvalid)}
        disabled={isPending}
      >
        저장하기
      </Button>
      <Button theme="dark" variant="outlined" onClick={handleBack}>
        뒤로가기
      </Button>
    </ButtonGroup>
  );
};

export default RecordEditButtonGroup;

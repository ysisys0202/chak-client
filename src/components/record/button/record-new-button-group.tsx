"use client";

import { useRouter } from "next/navigation";
import { FieldErrors } from "react-hook-form";
import { Button } from "chak-blocks/plain";
import { useToast } from "chak-blocks/context";
import { RecordData } from "@/util/validation/record";
import { revalidateRecords } from "@/actions/revalidate-records.action";
import { useRecordFormContext } from "@/providers/record-form";
import { useCreateRecordMutation } from "@/query/record";
import ButtonGroup from "@/components/record/button/button-group";

const RecordNewButtonGroup = ({ className }: { className?: string }) => {
  const router = useRouter();
  const {
    formMethods: {
      handleSubmit,
      formState: { isSubmitting },
    },
  } = useRecordFormContext();
  const { mutateAsync, isPending } = useCreateRecordMutation();
  const { open } = useToast();

  const handleSave = async (data: RecordData) => {
    await mutateAsync(data);
    await revalidateRecords();
  };

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
        disabled={isSubmitting || isPending}
      >
        저장하기
      </Button>
      <Button theme="dark" variant="outlined" onClick={handleBack}>
        뒤로가기
      </Button>
    </ButtonGroup>
  );
};

export default RecordNewButtonGroup;

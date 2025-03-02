"use client";

import { ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { readingStateMessage } from "@/constants/message";
import path from "@/constants/path";
import { ReadingStates } from "@/types/record";
import Select from "@/components/shared/select/select";

const RecordFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const readingState = searchParams.get("reading-state") as
    | ReadingStates
    | undefined;
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const readingState = event.target.value;

    if (readingState === "all") {
      router.replace(path.record);
      return;
    }
    router.replace(`${path.record}?reading-state=${event.currentTarget.value}`);
  };
  return (
    <Select
      name="reading-state-filter"
      id=""
      defaultValue={readingState || ""}
      onChange={handleSelectChange}
    >
      <option disabled value="">
        독서 상태
      </option>
      <option value="all">전체</option>
      {Object.entries(readingStateMessage).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default RecordFilter;

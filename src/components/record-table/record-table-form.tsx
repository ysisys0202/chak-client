"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { RecordFormFields } from "@/types/record";
import { generateQueryString } from "@/util/url";
import { useAuth } from "@/providers/auth";
import { useRecordFormContext } from "@/providers/record-form";
import RecordTable from "@/components/record-table/record-table";
import RecordFormField from "@/components/record-table/form-field";

const recordFormFields: RecordFormFields = {
  title: {
    type: "text",
  },
  readingState: {
    type: "select",
    options: [
      { value: "pre-reading", name: "읽기 전" },
      { value: "reading", name: "읽는 중" },
      { value: "stop", name: "중단" },
      { value: "done", name: "완독" },
    ],
  },
  rating: {
    type: "select",
    options: Array.from({ length: 10 }, (_, index) => ({
      value: index + 1,
      name: index + 1,
    })),
    dataType: "number",
  },
  recordDetail: {
    type: "textarea",
  },
};

const RecordTableForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const {
    bookData,
    formMethods: { register, setValue },
  } = useRecordFormContext();

  useEffect(() => {
    setValue("bookId", bookData.id, { shouldValidate: true });
    setValue("userId", user.id, { shouldValidate: true });
    setValue("isPublic", false, { shouldValidate: true });
  }, [setValue, bookData, user]);

  const handleBookSearchModal = () => {
    router.replace(
      `${pathname}?${generateQueryString({
        "book-search-modal": true,
      })}`
    );
  };

  return (
    <form>
      <input
        type="text"
        hidden
        {...register("bookId", { valueAsNumber: true })}
      />
      <input
        type="text"
        hidden
        value={user.id}
        {...register("userId", { valueAsNumber: true })}
      />
      <input
        type="text"
        hidden
        value={user.id}
        {...register("isPublic", { setValueAs: (value) => value === "true" })}
      />
      <RecordTable
        renderLabel={({ id, label }) => <label htmlFor={id}>{label}</label>}
        renderBookCoverImage={() => (
          <button type="button" onClick={handleBookSearchModal}>
            {bookData?.image && (
              <Image
                src={bookData.image}
                alt={`${bookData.title}의 표지 이미지`}
                fill
              />
            )}
          </button>
        )}
        renderBookData={(fieldId) => bookData[fieldId]}
        renderRecordData={(fieldId) => {
          if (!recordFormFields[fieldId]) {
            return null;
          }
          const { type, options, dataType } = recordFormFields[fieldId];
          return (
            <RecordFormField
              type={type}
              id={fieldId}
              dataType={dataType}
              options={options}
              register={register}
            />
          );
        }}
      />
    </form>
  );
};

export default RecordTableForm;

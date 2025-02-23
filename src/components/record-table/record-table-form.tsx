"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { readingStateMessage } from "@/constants/message";
import { RecordFormFields } from "@/types/record";
import { generateQueryString } from "@/util/url";
import { useAuth } from "@/providers/auth";
import { useRecordFormContext } from "@/providers/record-form";
import RecordTable from "@/components/record-table/record-table";
import RecordFormField from "@/components/record-table/form-field";
import BookSelectButton from "@/components/book/select-button/select-button";

const maxRating = 10;

const recordFormFields: RecordFormFields = {
  title: {
    type: "text",
  },
  readingState: {
    type: "select",
    options: Object.entries(readingStateMessage).map(([value, name]) => ({
      value,
      name,
    })),
  },
  rating: {
    type: "select",
    options: Array.from({ length: maxRating }, (_, index) => ({
      value: maxRating - index,
      name: maxRating - index,
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
          <BookSelectButton
            type="button"
            onClick={handleBookSearchModal}
            coverImageUrl={bookData.image}
            alt={bookData.title}
          />
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

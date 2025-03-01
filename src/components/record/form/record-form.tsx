"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { recordFields, recordFormFields } from "@/constants/record";
import { useAuth } from "@/providers/auth";
import { useRecordFormContext } from "@/providers/record-form";
import { generateQueryString } from "@/util/url";
import RecordFormField from "@/components/record/form/field/record-form-field";
import BookSelectButton from "@/components/book/select-button/select-button";
import BookInfo from "@/components/record/viewer/book-info/book-info";
import RecordData from "@/components/record/viewer/data/record-viewer-data";
import RecordLabel from "@/components/record/viewer/label/record-viewer-label";
import RecordRow from "@/components/record/viewer/row/record-viewer-row";
import RecordViewerTitle from "@/components/record/viewer/title/record-viewer-title";

const RecordForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const {
    bookData,
    formMethods: { register, setValue },
  } = useRecordFormContext();

  useEffect(() => {
    setValue("bookId", bookData.id, { shouldValidate: true });
    setValue("userId", user?.id || 0, { shouldValidate: true });
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
      <RecordViewerTitle>책 정보 입력</RecordViewerTitle>

      <BookInfo
        bookData={bookData}
        bookCoverImage={
          <BookSelectButton
            type="button"
            onClick={handleBookSearchModal}
            coverImageUrl={bookData.image}
            alt={bookData.title}
          />
        }
      />
      <RecordViewerTitle>기록 정보</RecordViewerTitle>
      {recordFields.map(({ id, label }) => {
        if (!recordFormFields[id]) {
          return null;
        }
        const { type, options, dataType } = recordFormFields[id];
        return (
          <RecordRow key={id}>
            <RecordLabel>{<label htmlFor={id}>{label}</label>}</RecordLabel>
            <RecordData>
              <RecordFormField
                type={type}
                id={id}
                dataType={dataType}
                options={options}
                register={register}
              />
            </RecordData>
          </RecordRow>
        );
      })}
      <input
        type="text"
        hidden
        {...register("bookId", { valueAsNumber: true })}
      />
      <input
        type="text"
        hidden
        value={user?.id}
        {...register("userId", { valueAsNumber: true })}
      />
      <input
        type="text"
        hidden
        value={user?.id}
        {...register("isPublic", { setValueAs: (value) => value === "true" })}
      />
    </form>
  );
};

export default RecordForm;

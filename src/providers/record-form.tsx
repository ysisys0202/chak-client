"use client";

import { createContext, useContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookItem } from "@/types/book";
import { RecordData, RecordSchema } from "@/util/validation/record";

export type BookData = BookItem & { id: number };

type RecordFormContextArgs = {
  formMethods: UseFormReturn<RecordData>;
  bookData: BookData;
  recordData: RecordData;
  updateBookData: (data: BookData) => void;
};

const RecordFormContext = createContext<RecordFormContextArgs | null>(null);

export const RecordFormProvider = ({
  initBookData,
  initRecordData,
  children,
}: {
  initBookData?: BookData;
  initRecordData?: RecordData;
  children: React.ReactNode;
}) => {
  const formMethods = useForm<RecordData>({
    mode: "onChange",
    resolver: zodResolver(RecordSchema),
    defaultValues: {
      bookId: initRecordData?.bookId,
      userId: initRecordData?.userId,
      title: initRecordData?.title,
      rating: initRecordData?.rating,
      readingState: initRecordData?.readingState,
      recordDetail: initRecordData?.recordDetail,
    },
  });

  const [bookData, setBookData] = useState<BookData>(
    initBookData || ({} as BookData)
  );

  const updateBookData = (data: BookData) => {
    setBookData(data);
  };

  return (
    <RecordFormContext.Provider
      value={{
        formMethods,
        bookData,
        recordData: initRecordData || ({} as RecordData),
        updateBookData,
      }}
    >
      {children}
    </RecordFormContext.Provider>
  );
};

export const useRecordFormContext = () => {
  const context = useContext(RecordFormContext);
  if (!context) {
    throw new Error(
      "useRecordFormContext는 RecordFormProvider 내부에서만 사용 가능합니다."
    );
  }
  return context;
};

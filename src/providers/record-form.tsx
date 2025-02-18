"use client";

import { createContext, useContext, useState } from "react";
import { RecordFormData } from "@/types/record";
import { BookItem } from "@/types/book";

type BookData = BookItem & { id: number };

type RecordFormContextArgs = {
  recordFormData: RecordFormData;
  bookData: BookData;
  updateRecordFormData: (data: RecordFormData) => void;
  updateBookData: (data: BookData) => void;
};

const defaultValue: RecordFormContextArgs = {
  recordFormData: {} as RecordFormData,
  bookData: {} as BookData,
  updateRecordFormData: () => {},
  updateBookData: () => {},
};

const RecordFormContext = createContext<RecordFormContextArgs | null>(null);

export const RecordFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [recordFormData, setRecordFormData] = useState<RecordFormData>(
    defaultValue.recordFormData
  );
  const [bookData, setBookData] = useState<BookData>(defaultValue.bookData);

  const updateRecordFormData = (data: RecordFormData) => {
    setRecordFormData(data);
  };

  const updateBookData = (data: BookData) => {
    setBookData(data);
  };

  return (
    <RecordFormContext.Provider
      value={{
        recordFormData,
        bookData,
        updateRecordFormData,
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
      "useRecordForm은 RecordFormProvider 내부에서만 사용 가능합니다."
    );
  }
  return context;
};

import { RecordData } from "@/util/validation/record";
import { DataTypes } from "@/types/data";

export type RecordFormData = {
  id: number;
  title: string;
  readingStatus: string;
  rating: number;
  recordDetail: string;
  bookId: number;
  userId: number;
};

export type RecordDetail = RecordFormData & {
  bookTitle: string;
  author: string;
  publisher: string;
  isbn: string;
  pubdate: string;
};

export type RecordResponse = {
  id: number;
  userId: number;
  readingState: "pre-reading" | "reading" | "stop" | "done";
  startDate?: string;
  endDate?: string;
  rating?: number;
  title: string;
  recordDetail: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  userNickname: string;
  userProfileImage?: string;
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookPublisher: string;
  bookImage: string;
  bookIsbn: string;
  bookPubdate: string;
};

export type RecordFormFields = {
  [K in keyof RecordData]?: {
    type: "text" | "select" | "textarea";
    options?: { value: string | number; name: string | number }[];
    dataType?: DataTypes;
  };
};

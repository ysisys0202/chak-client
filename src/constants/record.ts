import { readingStateMessage } from "@/constants/message";
import { RecordFormFields } from "@/types/record";
import { BookData } from "@/providers/record-form";
import { RecordData } from "@/util/validation/record";

export const bookFields: { id: keyof BookData; label: string }[] = [
  {
    id: "title",
    label: "책 제목",
  },
  {
    id: "author",
    label: "작가",
  },
  {
    id: "publisher",
    label: "출판사",
  },
  {
    id: "pubdate",
    label: "출간일",
  },
  {
    id: "isbn",
    label: "ISBN",
  },
];

export const recordFields: { id: keyof RecordData; label: string }[] = [
  {
    id: "title",
    label: "제목",
  },
  {
    id: "readingState",
    label: "독서 상황",
  },
  {
    id: "rating",
    label: "별점",
  },
  {
    id: "recordDetail",
    label: "상세 기록",
  },
];

export const maxRating = 10;

export const recordFormFields: RecordFormFields = {
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

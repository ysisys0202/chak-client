import { z } from "zod";

export const RecordSchema = z.object({
  bookId: z.number({
    message: "책 아이디는 숫자",
  }),
  userId: z.number({
    message: "유저 아이디는 숫자",
  }),
  title: z.string().min(1, {
    message: "1자 이상의 제목",
  }),
  readingState: z.string({
    message: "값 입력",
  }),
  rating: z.number({
    message: "별점 입력",
  }),
  recordDetail: z.string({
    message: "상세 기록은 문자열",
  }),
  isPublic: z.boolean(),
});

export type RecordData = z.infer<typeof RecordSchema>;

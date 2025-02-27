import { fetcher } from "@/api/fetcher";
import { generateQueryString } from "@/util/url";
import { BookItem, SearchBooksOptions } from "@/types/book";

export type BookSearchResponse = {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: BookItem[];
};

export const searchBooks = (
  query: string,
  options?: SearchBooksOptions
): Promise<BookSearchResponse> => {
  const queryParams = generateQueryString({
    query,
    ...options,
  });
  return fetcher(`/books/search?${queryParams}`);
};

export const getBook = (isbn: string) => {
  return fetcher(`/books/${isbn}`);
};

export const postBook = (formData: BookItem) => {
  return fetcher(`/books`, {
    options: {
      method: "POST",
      data: formData,
    },
  });
};

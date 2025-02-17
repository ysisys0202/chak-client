import { fetcher } from "@/api/fetcher";
import { BookItem, SearchBooksOptions } from "@/types/book";
import { generateQueryString } from "@/util/url";

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

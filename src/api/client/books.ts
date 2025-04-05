import { clientFetcher } from "@/api/client/fetcher";
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
  return clientFetcher(`/books/search?${queryParams}`);
};

export const getBook = (isbn: string) => {
  return clientFetcher(`/books/${isbn}`);
};

export const postBook = (formData: BookItem) => {
  return clientFetcher(`/books`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

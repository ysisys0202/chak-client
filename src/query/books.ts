import { useMutation, useQuery } from "@tanstack/react-query";
import { getBook, postBook, searchBooks } from "@/api/books";
import { BookItem, SearchBooksOptions } from "@/types/book";
import queryKey from "@/constants/query-keys";

export const useSearchBooksQuery = (
  query: string | null,
  options?: SearchBooksOptions
) => {
  return useQuery({
    queryKey: [queryKey.books.search, query, JSON.stringify(options || {})],
    queryFn: () => searchBooks(query as string, options),
    enabled: !!query,
  });
};

export const useBookQuery = (isbn: string) => {
  return useQuery({
    queryKey: [queryKey.books.book, isbn],
    queryFn: () => getBook(isbn),
    enabled: false,
  });
};

export const useBookMutation = () => {
  return useMutation({
    mutationFn: (formData: BookItem) => postBook(formData),
  });
};

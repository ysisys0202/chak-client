import { searchBooks } from "@/api/books";
import queryKey from "@/constants/query-keys";
import { SearchBooksOptions } from "@/types/book";
import { useQuery } from "@tanstack/react-query";

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

const queryKey = {
  auth: {
    me: "/auth/me",
  },
  books: {
    search: "/books/search",
    book: "/books",
  },
  records: {
    list: "/records/list",
    one: "/records/one",
    countByReadingState: "/records/count/by-reading-state",
  },
};

export default queryKey;

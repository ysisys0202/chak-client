export type BookItem = {
  title: string;
  link: string;
  image: string;
  author: string;
  discount: string;
  publisher: string;
  pubdate: string;
  isbn: string;
  description: string;
};

export type SearchBooksOptions = {
  display?: number;
  start?: number;
  sort?: string;
  filter?: string;
  exclude?: string;
};

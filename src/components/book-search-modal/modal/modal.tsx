"use client";

import { useEffect, useState } from "react";
import { Typography } from "chak-blocks/plain";
import { useSearchBooksQuery } from "@/query/books";
import List from "@/components/shared/list/list";
import Modal from "@/components/shared/modal/modal";
import Searchbar from "@/components/shared/searchbar/searchbar";
import Pagination from "@/components/shared/pagination/pagination";
import BookListRow from "@/components/book-search-modal/list/row";
import { styles } from "./style.css";

const BookSearchModal = () => {
  const [query, setQuery] = useState<string>("");
  const [curerntPage, setCurrentPage] = useState<number>(1);
  const [start, setStart] = useState<number>(1);

  const { data } = useSearchBooksQuery(query, {
    start,
    display: 30,
  });

  const {
    total,
    display,
    items: books,
  } = data ?? { total: 0, display: 0, items: [] };

  const totalPage = Math.ceil(total / display);

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentPage(1);
  };

  const handlePagination = (value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setStart((curerntPage - 1) * display + 1);
  }, [curerntPage]);

  return (
    <Modal className={styles.self}>
      <Typography variant="title5" as="h3">
        기록할 책 찾기
      </Typography>
      <Searchbar className={styles.searchbar} onSearch={handleSearch} />
      <Typography>
        검색 결과{" "}
        <Typography as="span" strong>
          {total.toLocaleString()}
        </Typography>
        개
      </Typography>
      <List className={styles.bookList}>
        {books?.map((book) => (
          <BookListRow key={book.isbn} book={book} />
        ))}
      </List>
      <Pagination
        totalPage={totalPage}
        currentPage={curerntPage}
        onPagination={handlePagination}
        className={styles.pagination}
      />
    </Modal>
  );
};

export default BookSearchModal;

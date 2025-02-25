"use client";

import { useEffect, useState } from "react";
import { Typography } from "chak-blocks/plain";
import { useSearchBooksQuery } from "@/query/books";
import List from "@/components/shared/list/list";
import Modal from "@/components/shared/modal/modal";
import Searchbar from "@/components/shared/searchbar/searchbar";
import Pagination from "@/components/shared/pagination/pagination";
import BookListRow from "@/components/book/list/row";
import { styles } from "./style.css";

const display = 30;

const BookSearchModal = () => {
  const [query, setQuery] = useState<string>("");
  const [curerntPage, setCurrentPage] = useState<number>(1);
  const [start, setStart] = useState<number>(1);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const { data, isLoading } = useSearchBooksQuery(query, {
    start,
    display,
  });

  const { total, items: books } = data ?? { total: 0, display: 0, items: [] };

  const isEmpty = !isLoading && books.length === 0;
  const totalPage = Math.ceil(total / display);

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentPage(1);
    if (!isSearched) {
      setIsSearched(true);
    }
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
        기록할 책 검색하기
      </Typography>
      <Searchbar
        className={styles.searchbar}
        onSearch={handleSearch}
        placeholder="책 제목, 출판사, 작가 이름으로 책 검색"
      />
      {!isSearched && <Typography>기록할 책을 검색해주세요!</Typography>}
      {isSearched && isLoading && (
        <List className={styles.bookList}>
          {Array.from({ length: display }, (_, index) => (
            <BookListRow.Skeleton key={index} />
          ))}
        </List>
      )}
      {isSearched && !isLoading && isEmpty && (
        <Typography>검색 결과가 존재하지 않아요.</Typography>
      )}
      {isSearched && !isLoading && !isEmpty && (
        <>
          <Typography>
            검색 결과{" "}
            <Typography as="span" strong>
              {total.toLocaleString()}
            </Typography>
            개
          </Typography>
          <List className={styles.bookList}>
            {books.map((book) => (
              <BookListRow key={book.isbn} book={book} />
            ))}
          </List>
          <Pagination
            totalPage={totalPage}
            currentPage={curerntPage}
            onPagination={handlePagination}
            className={styles.pagination}
          />
        </>
      )}
    </Modal>
  );
};

export default BookSearchModal;

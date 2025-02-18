"use  client";

import { Button } from "chak-blocks/plain";
import { paginationStyles } from "./style.css";

type Props = {
  totalPage: number;
  currentPage: number;
  className?: string;
  displayButtonLength?: number;
  onPagination: (value: number) => void;
};

const Pagination = ({
  totalPage,
  currentPage,
  className,
  displayButtonLength = 5,
  onPagination,
}: Props) => {
  const morePage = displayButtonLength < totalPage;
  const currnetPageOffset = Math.ceil(currentPage / displayButtonLength) - 1;
  const totalPageOffset = Math.ceil(totalPage / displayButtonLength);

  const handlePrevButton = () => {
    if (currnetPageOffset <= 0) {
      return;
    }
    const prev = (currnetPageOffset - 1) * displayButtonLength + 1;

    onPagination(prev);
  };

  const handleNextButton = () => {
    if (currnetPageOffset === totalPageOffset) {
      return;
    }
    const next = (currnetPageOffset + 1) * displayButtonLength + 1;

    onPagination(next);
  };

  const handleFirstButton = () => {
    onPagination(1);
  };

  const handleLastButton = () => {
    onPagination(totalPage);
  };

  return (
    <div className={`${paginationStyles.self} ${className}`}>
      {morePage && (
        <>
          <Button
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handleFirstButton}
          >
            처음
          </Button>
          <Button
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handlePrevButton}
          >
            이전
          </Button>
        </>
      )}
      {Array.from({ length: displayButtonLength }, (_, index) => {
        const pageNum = currnetPageOffset * displayButtonLength + index + 1;
        return (
          pageNum <= totalPage && (
            <Button
              key={pageNum + 1}
              variant={pageNum === currentPage ? "contained" : "outlined"}
              theme="dark"
              size="sm"
              onClick={() => {
                onPagination(pageNum);
              }}
            >
              {pageNum}
            </Button>
          )
        );
      })}
      {morePage && (
        <>
          <Button
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handleNextButton}
          >
            다음
          </Button>
          <Button
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handleLastButton}
          >
            끝
          </Button>
        </>
      )}
    </div>
  );
};

export default Pagination;

"use  client";

import { Button } from "chak-blocks/plain";
import { styles } from "./style.css";
import { Icon } from "chak-blocks/plain";
import { combineClassNames } from "@/util/common";

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
  const classNames = combineClassNames(className, styles.self);

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
    <div className={classNames}>
      {morePage && (
        <>
          <Button
            type="button"
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handleFirstButton}
            className={styles.button}
          >
            <Icon name="chevron" size={16} className={styles.doublePrevIcon} />
            <Icon name="chevron" size={16} className={styles.prevIcon} />
          </Button>
          <Button
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handlePrevButton}
            className={styles.button}
          >
            <Icon name="chevron" size={16} className={styles.prevIcon} />
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
            className={styles.button}
          >
            <Icon name="chevron" size={16} className={styles.nextIcon} />
          </Button>
          <Button
            variant="outlined"
            theme="dark"
            size="sm"
            onClick={handleLastButton}
            className={styles.button}
          >
            <Icon name="chevron" size={16} className={styles.nextIcon} />
            <Icon name="chevron" size={16} className={styles.doubleNextIcon} />
          </Button>
        </>
      )}
    </div>
  );
};

export default Pagination;

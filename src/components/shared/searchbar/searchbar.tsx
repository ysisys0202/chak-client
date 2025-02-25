"use client";

import { useRef } from "react";
import { Button } from "chak-blocks/plain";
import { styles } from "./style.css";

type Props = {
  className: React.ReactNode;

  onSearch: (query: string) => void;
  placeholder?: string;
};

const Searchbar = ({
  className,
  onSearch,
  placeholder = "검색어를 입력해주세요.",
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!inputRef.current) {
      return null;
    }
    onSearch(inputRef.current.value);
  };

  return (
    <div className={`${styles.self} ${className}`}>
      <input
        type="text"
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Button
        variant="contained"
        theme="dark"
        size="sm"
        type="button"
        onClick={handleSearch}
        className={styles.button}
      >
        검색
      </Button>
    </div>
  );
};

export default Searchbar;

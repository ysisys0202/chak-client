import { useCallback } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Typography } from "chak-blocks/plain";
import { BookItem } from "@/types/book";
import { useBookMutation, useBookQuery } from "@/query/books";
import { BookData, useRecordFormContext } from "@/providers/record-form";
import { removeQueryParam } from "@/util/url";
import DefinitionList from "@/components/shared/definition/list";
import ListRow from "@/components/shared/list/row";
import { lineClamp } from "@/styles/util.css";
import { styles } from "./style.css";

type Props = {
  book: BookItem;
};

const BookListRow = ({ book }: Props) => {
  const additionalInfo = [
    {
      name: "저자",
      value: book.author,
    },
    {
      name: "출판사",
      value: book.publisher,
    },
    {
      name: "출간일",
      value: book.pubdate,
    },
  ];

  const { refetch } = useBookQuery(book.isbn);
  const { mutateAsync } = useBookMutation();
  const { updateBookData } = useRecordFormContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const registerBook = (data: BookData) => {
    updateBookData(data);
    router.replace(
      removeQueryParam(`${pathname}?${searchParams}`, "book-search-modal")
    );
  };

  const handleSelectBook = useCallback(async () => {
    const result = await refetch();

    if (!result.isError) {
      registerBook(result.data);
    }
    const isNotFound = result.error?.message.includes("찾을 수 없습니다.");

    if (isNotFound) {
      try {
        const data = await mutateAsync(book);
        registerBook(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, [refetch, mutateAsync]);

  return (
    <ListRow className={styles.row}>
      <div className={styles.image}>
        <Image src={book.image} alt={`${book.title} 책 표지`} fill />
      </div>
      <div>
        <Typography as="h3" className={lineClamp({ lines: 2 })} strong>
          {book.title}
        </Typography>
        <DefinitionList>
          {additionalInfo.map(({ name, value }) => (
            <DefinitionList.Item key={name}>
              <DefinitionList.Term>{name}</DefinitionList.Term>
              <DefinitionList.Description>{value}</DefinitionList.Description>
            </DefinitionList.Item>
          ))}
        </DefinitionList>
      </div>
      <Button size="sm" onClick={handleSelectBook} className={styles.button}>
        선택하기
      </Button>
    </ListRow>
  );
};

export default BookListRow;

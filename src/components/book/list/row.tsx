import { useCallback } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Typography } from "chak-blocks/plain";
import { BookItem } from "@/types/book";
import { useBookMutation } from "@/query/books";
import { BookData, useRecordFormContext } from "@/providers/record-form";
import { removeQueryParam } from "@/util/url";
import { formatShortDate } from "@/util/common";
import DefinitionList from "@/components/shared/definition/list";
import ListRow from "@/components/shared/list/row";
import { lineClamp } from "@/styles/util.css";
import { styles } from "./style.css";
import BookListRowSkeleton from "./row-skeleton";

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

  const { mutateAsync } = useBookMutation();
  const { updateBookData } = useRecordFormContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const {
    formMethods: { setValue },
  } = useRecordFormContext();

  const registerBook = useCallback(
    (book: BookData) => {
      updateBookData({ ...book, pubdate: formatShortDate(book.pubdate) });
      setValue("bookId", book.id, { shouldValidate: true });
      router.replace(
        removeQueryParam(`${pathname}?${searchParams}`, "book-search-modal")
      );
    },
    [updateBookData, setValue, router, pathname, searchParams]
  );

  const handleSelectBook = useCallback(async () => {
    try {
      const resBook = await mutateAsync(book);
      registerBook(resBook);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        throw new Error(error.message);
      }
    }
  }, [mutateAsync, book, registerBook]);

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

BookListRow.Skeleton = BookListRowSkeleton;

export default BookListRow;

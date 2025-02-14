import Image from "next/image";
import { Button, Typography } from "chak-blocks/plain";
import ListRow from "@/components/shared/list/row";
import DefinitionList from "@/components/shared/definition/list";
import { lineClamp } from "@/styles/util.css";
import { styles } from "./style.css";

type Props = {
  book: {
    title: string;
    coverImageUrl: string;
    author: string;
    publisher: string;
    pubdate: string;
  };
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
  return (
    <ListRow
      className={styles.row}
      leftContent={
        <div className={styles.image}>
          <Image src={book.coverImageUrl} alt={`${book.title} 책 표지`} fill />
        </div>
      }
      centerContent={
        <>
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
        </>
      }
      rightContent={
        <Button size="sm" onClick={() => {}}>
          선택하기
        </Button>
      }
    />
  );
};

export default BookListRow;

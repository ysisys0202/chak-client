import Image from "next/image";
import Link from "next/link";
import path from "@/constants/path";
import { Typography } from "chak-blocks/plain";
import { formatShortDate } from "@/util/common";
import ListRow from "@/components/shared/list/row";
import BookCoverImage from "@/components/book/cover-image/cover-image";
import { styles } from "./style.css";

type Props = {
  id: number | string;
  title: string;
  coverImageUrl?: string;
  bookTitle?: string;
  updatedAt: string;
  header?: boolean;
};

const RecordRow = ({
  id,
  title,
  coverImageUrl,
  bookTitle,
  updatedAt,
  header = false,
}: Props) => {
  return (
    <ListRow key={id} className={styles.self}>
      <Link key={id} href={`${path.record}/${id}`} className={styles.link}>
        {header ? (
          <Typography variant="text2" theme="tertiary">
            표지
          </Typography>
        ) : (
          <BookCoverImage
            imageUrl={coverImageUrl as string}
            alt={`${bookTitle} 책 표지`}
            width="30px"
            height="40px"
          />
        )}

        <Typography
          as="h2"
          variant={header ? "text2" : "text1"}
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant="text2"
          theme="tertiary"
          as="span"
          className={styles.date}
        >
          {header ? updatedAt : formatShortDate(updatedAt)}
        </Typography>
      </Link>
    </ListRow>
  );
};

export default RecordRow;

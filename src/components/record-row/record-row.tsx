import Image from "next/image";
import Link from "next/link";
import path from "@/constants/path";
import { Typography } from "chak-blocks/plain";
import ListRow from "@/components/shared/list/row";
import { styles } from "./style.css";

type Props = {
  id: number | string;
  title: string;
  coverImageUrl?: string;
  bookTitle?: string;
  updatedAt: string | Date;
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
        <Typography variant="text2" theme="tertiary" className={styles.id}>
          {id}
        </Typography>
        {header ? (
          <Typography variant="text2" theme="tertiary">
            표지
          </Typography>
        ) : (
          <Image
            src={coverImageUrl as string}
            alt={`${bookTitle} 커버 이미지`}
            width={30}
            height={40}
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
          {updatedAt.toString()}
        </Typography>
      </Link>
    </ListRow>
  );
};

export default RecordRow;

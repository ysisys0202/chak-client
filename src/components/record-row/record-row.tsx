import Link from "next/link";
import Image from "next/image";
import path from "@/constants/path";
import { recordRowStyles } from "./style.css";
import { Divider, Typography } from "chak-blocks/plain";

type Props = {
  id: number;
  title: string;
  coverImageUrl: string;
  bookTitle: string;
  updatedAt: string | Date;
};

const RecordRow = ({
  id,
  title,
  coverImageUrl,
  bookTitle,
  updatedAt,
}: Props) => {
  return (
    <li className={recordRowStyles.self}>
      <Link href={`${path.record}/${id}`} className={recordRowStyles.link}>
        <Typography
          variant="text2"
          theme="tertiary"
          className={recordRowStyles.id}
        >
          {id}
        </Typography>
        <Image
          src={coverImageUrl}
          alt={`${bookTitle} 커버 이미지`}
          width={30}
          height={40}
        />

        <Typography as="h2">{title}</Typography>

        <Typography
          variant="text2"
          theme="tertiary"
          as="span"
          className={recordRowStyles.date}
        >
          {updatedAt.toString()}
        </Typography>
      </Link>
    </li>
  );
};

export default RecordRow;

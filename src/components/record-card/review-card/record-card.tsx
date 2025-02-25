import Image from "next/image";
import Link from "next/link";
import { Card, Typography } from "chak-blocks/plain";
import { gray } from "@/constants/colors";
import path from "@/constants/path";
import { formatShortDate } from "@/util/common";
import Rating from "@/components/shared/rating/rating";
import { styles } from "./style.css";

type Props = {
  id: number;
  title: string;
  description: string;
  coverImageUrl: string;
  bookTitle: string;
  rating?: number;
  updatedAt: string;
};

const ReviewCard = ({
  coverImageUrl,
  bookTitle,
  rating = 0,
  updatedAt,
  title,
  description,
  id,
}: Props) => {
  return (
    <Card
      variant="outlined"
      borderColor={gray[200]}
      rounded
      as="article"
      className={styles.self}
    >
      <Link href={`${path.record}/${id}`} className={styles.link}>
        <Image
          src={coverImageUrl}
          alt={`${bookTitle} 표지 이미지`}
          width={200}
          height={180}
          className={styles.image}
        />
        <div className={styles.content}>
          <Typography as="h3" variant="text1" strong className={styles.title}>
            {title}
          </Typography>
          <Typography
            variant="text2"
            theme="secondary"
            className={styles.description}
          >
            {description}
          </Typography>
          <div className={styles.bottom}>
            <Rating value={rating} />
            <Typography variant="text2" theme="tertiary" as="span">
              {formatShortDate(updatedAt)}
            </Typography>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ReviewCard;

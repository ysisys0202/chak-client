import Image from "next/image";
import Link from "next/link";
import { Card, RatingStar, Typography } from "chak-blocks/plain";
import { gray } from "@/constants/colors";
import { recordCardStyles } from "./style.css";

type Props = {
  id: number;
  title: string;
  description: string;
  coverImageUrl: string;
  bookTitle: string;
  rating?: number;
  updatedAt: string | Date;
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
      className={recordCardStyles.self}
    >
      <Link href={`/${id}`} className={recordCardStyles.link}>
        <Image
          src={coverImageUrl}
          alt={`${bookTitle} 표지 이미지`}
          width={200}
          height={180}
          className={recordCardStyles.image}
        />
        <div className={recordCardStyles.content}>
          <Typography
            as="h3"
            variant="title5"
            strong
            className={recordCardStyles.title}
          >
            {title}
          </Typography>
          <Typography
            variant="text1"
            theme="secondary"
            className={recordCardStyles.description}
          >
            {description}
          </Typography>
          <div className={recordCardStyles.bottom}>
            <RatingStar value={rating} />
            <Typography variant="text2" theme="tertiary" as="span">
              {updatedAt.toString()}
            </Typography>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ReviewCard;

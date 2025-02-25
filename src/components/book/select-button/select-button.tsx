import React, { ButtonHTMLAttributes } from "react";
import BookCoverImage from "../cover-image/cover-image";
import { combineClassNames } from "@/util/common";
import { styles } from "./style.css";
import { Typography } from "chak-blocks/plain";

type Props = {
  coverImageUrl?: string;
  alt?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BookSelectButton = ({
  coverImageUrl,
  alt,
  className,
  ...props
}: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <button className={classNames} {...props}>
      {coverImageUrl ? (
        <BookCoverImage imageUrl={coverImageUrl} alt={`${alt} 표지 이미지`} />
      ) : (
        <Typography as="span" variant="text2">
          기록할 책을 <br />
          선택해주세요
        </Typography>
      )}
    </button>
  );
};

export default BookSelectButton;

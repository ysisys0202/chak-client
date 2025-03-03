import React from "react";
import Image from "next/image";
import { Skeleton } from "chak-blocks/plain";
import { heightVar, styles, widthVar } from "./style.css";
import { combineClassNames } from "@/util/common";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type Props = {
  width?: string;
  height?: string;
  imageUrl: string;
  alt: string;
  className?: string;
};

const BookCoverSkeleton = ({
  width = "100%",
  height = "100%",
  className,
}: Omit<Props, "imageUrl" | "alt">) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <div
      className={classNames}
      style={{
        ...assignInlineVars({
          [widthVar]: width,
          [heightVar]: height,
        }),
      }}
    >
      <Skeleton className={styles.skeletion} />
    </div>
  );
};

const BookCoverImage = ({
  imageUrl,
  alt,
  width = "100%",
  height = "100%",
  className,
}: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <div
      className={classNames}
      style={{
        ...assignInlineVars({
          [widthVar]: width,
          [heightVar]: height,
        }),
      }}
    >
      <Image src={imageUrl} alt={alt} fill />
    </div>
  );
};

BookCoverImage.Skeleton = BookCoverSkeleton;

export default BookCoverImage;

import React from "react";
import { styles } from "./style.css";
import ListRow from "@/components/shared/list/row";
import { Skeleton } from "chak-blocks/plain";

const BookListRowSkeleton = () => {
  return (
    <ListRow className={styles.row}>
      <Skeleton className={styles.image} /> <Skeleton height="20px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </ListRow>
  );
};

export default BookListRowSkeleton;

import React from "react";
import { styles } from "./style.css";
import ListRow from "@/components/shared/list/row";
import { Skeleton } from "chak-blocks/plain";

const BookListRowSkeleton = () => {
  return (
    <ListRow className={styles.row}>
      <Skeleton className={styles.image} />
      <div className={styles.skeletonInfo}>
        <Skeleton width="120px" height="20px" />
        <Skeleton width="120px" height="10px" />
        <Skeleton width="120px" height="10px" />
        <Skeleton width="120px" height="10px" />
      </div>
    </ListRow>
  );
};

export default BookListRowSkeleton;

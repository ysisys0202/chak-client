import { Skeleton } from "chak-blocks/plain";
import ListRow from "@/components/shared/list/row";
import BookCoverImage from "@/components/book/cover-image/cover-image";
import { styles } from "./style.css";

const RecordRowSkeleton = () => {
  return (
    <ListRow className={styles.self}>
      <div className={styles.link}>
        <BookCoverImage.Skeleton
          width="30px"
          height="40px"
          className={styles.image}
        />
        <Skeleton width="400px" height="24px" />
        <Skeleton width="100px" height="24px" className={styles.date} />
      </div>
    </ListRow>
  );
};

export default RecordRowSkeleton;

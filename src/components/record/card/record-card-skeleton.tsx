import { Skeleton } from "chak-blocks/plain";
import { recordCardStyle } from "./style.css";

const RecordCardSkeleton = () => {
  return <Skeleton className={recordCardStyle} />;
};

export default RecordCardSkeleton;

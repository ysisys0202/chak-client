import RecordRow from "../row/record-viewer-row";
import RecordLabel from "../label/record-viewer-label";
import RecordData from "../data/record-viewer-data";
import { bookFields } from "@/constants/record";
import { BookData } from "@/providers/record-form";
import { styles } from "./style.css";

type Props = {
  bookData: BookData;
  bookCoverImage: React.ReactNode;
};

const BookInfo = ({ bookCoverImage, bookData }: Props) => {
  return (
    <div className={styles.self}>
      <div className={styles.imageCell}>
        <div className={styles.bookCoverImage}>{bookCoverImage}</div>
      </div>
      <div className={styles.bookInfo}>
        {bookFields.map(({ id, label }) => (
          <RecordRow key={id}>
            <RecordLabel>{label}</RecordLabel>
            <RecordData>{bookData[id]}</RecordData>
          </RecordRow>
        ))}
      </div>
    </div>
  );
};

export default BookInfo;

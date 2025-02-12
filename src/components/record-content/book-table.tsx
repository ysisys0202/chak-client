import Image from "next/image";
import { Input, InputField } from "chak-blocks/plain";
import { recordContentStyles } from "./style.css";

const bookFields = [
  {
    id: "book-title",
    label: "책 제목",
    type: "text",
  },
  {
    id: "author",
    label: "작가",
    type: "text",
  },
  {
    id: "publisher",
    label: "출판사",
    type: "text",
  },
  {
    id: "genre",
    label: "장르",
    type: "text",
  },
  {
    id: "page-count",
    label: "페이지 수",
    type: "text",
  },
];

const BookTable = () => {
  return (
    <div className={recordContentStyles.bookArea}>
      <div className={recordContentStyles.imageArea}>
        <div className={recordContentStyles.bookCoverImage}>
          <Image
            src="https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg"
            alt="책 표지"
            fill
          />
        </div>
      </div>
      <div className={recordContentStyles.bookInfo}>
        {bookFields.map(({ id, label, type }) => (
          <InputField
            key={id}
            id={id}
            label={label}
            className={recordContentStyles.cellItem}
          >
            <Input
              type={type}
              value="책 제목"
              className={recordContentStyles.cellInput}
              readOnly
            />
          </InputField>
        ))}
      </div>
    </div>
  );
};

export default BookTable;

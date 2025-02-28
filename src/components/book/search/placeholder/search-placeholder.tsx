import Image from "next/image";
import { Typography } from "chak-blocks/plain";
import { styles } from "./style.css";
import { shades } from "@/constants/colors";

type Props = { mode?: "before-search" | "no-result" };

const SearchPlaceholder = ({ mode = "before-search" }: Props) => {
  const isBeforeSearch = mode === "before-search";
  return (
    <div className={styles.self}>
      <Typography variant="text1" color={shades[800]} className={styles.text}>
        {isBeforeSearch
          ? "기록하고 싶은 책을 검색해보세요!"
          : "검색한 책을 찾지 못했어요. \n다른 키워드로 검색해보세요."}
      </Typography>
      <Image
        src={isBeforeSearch ? "/image/smile_book.png" : "/image/sad_book.png"}
        alt="검색하는 오렌지 캐릭터"
        width={240}
        height={268}
        className={styles.image}
      />
    </div>
  );
};

export default SearchPlaceholder;

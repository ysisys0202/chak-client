import Image from "next/image";
import { Typography } from "chak-blocks/plain";
import { styles } from "./style.css";

type Props = { mode?: "before-search" | "no-result" };

const SearchPlaceholder = ({ mode = "before-search" }: Props) => {
  const isBeforeSearch = mode === "before-search";
  return (
    <div className={styles.self}>
      <Typography variant="title5" className={styles.text}>
        {isBeforeSearch
          ? "기록하고 싶은 책을 검색해보세요!"
          : "검색한 책을 찾지 못했어요. \n다른 키워드로 검색해보세요."}
      </Typography>
      <Image
        src="/image/ch_search_no_result.png"
        alt="검색하는 오렌지 캐릭터"
        width={560}
        height={566}
        className={styles.image}
      />
    </div>
  );
};

export default SearchPlaceholder;

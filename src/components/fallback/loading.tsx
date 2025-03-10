import Image from "next/image";
import { Typography } from "chak-blocks/plain";
import { shades } from "@/constants/colors";
import { styles } from "./fallback.css";

const Loading = () => {
  return (
    <div className={styles.self}>
      <Typography color={shades[600]} className={styles.text}>
        잠들어 있는 기록을 찾고 있어요
      </Typography>
      <Image
        src="/image/stacked_books.png"
        alt="책이 쌓인 이미지"
        width={100}
        height={122}
        className={styles.button}
      />
    </div>
  );
};

export default Loading;

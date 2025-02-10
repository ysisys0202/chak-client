import { Typography } from "chak-blocks/plain";
import Image from "next/image";
import { loginIntroStyles } from "./style.css";
const LoginIntroSection = ({ className }: { className: string }) => {
  return (
    <section className={`${className} ${loginIntroStyles.self}`}>
      <div className={loginIntroStyles.bookInteractionArea}>
        <Typography
          variant="title5"
          theme="tertiary"
          className={`is-active ${loginIntroStyles.text1}`}
        >
          장바구니에 넣어둔 이유
        </Typography>
        <Typography
          variant="title5"
          theme="tertiary"
          className={`is-active ${loginIntroStyles.text2}`}
        >
          다 읽은 후의 감상
        </Typography>

        <Typography
          variant="title5"
          theme="tertiary"
          className={`is-active ${loginIntroStyles.text3}`}
        >
          간직하고 싶은 문장들
        </Typography>
        <Image
          src="/image/book.png"
          alt="펼친 책 아이콘"
          width={420 * 0.5}
          height={420 * 0.5}
          className={`is-active ${loginIntroStyles.book}`}
        />
        <Image
          src="/image/check.png"
          alt="체크 아이콘"
          width={184 * 0.35}
          height={198 * 0.35}
          className={`is-active ${loginIntroStyles.check}`}
        />
      </div>
      <Typography
        variant="title2"
        theme="tertiary"
        className={loginIntroStyles.mainText}
        strong
      >
        책을 덮으면 금세 사라지는 기억들
        <br />
        이제 Chak와 Check ✅ 하세요!
      </Typography>
    </section>
  );
};

export default LoginIntroSection;

import Link from "next/link";
import Image from "next/image";
import { Button, Typography } from "chak-blocks/plain";
import path from "@/constants/path";
import { getAuth } from "@/api/auth";
import { getToken } from "@/util/auth";
import Card from "@/components/shared/card/card";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import { styles } from "./style.css";

const WelcomeSection = async () => {
  const token = await getToken();
  const data = await getAuth({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <Section className={styles.self}>
      <SectionHeader
        title={
          <>
            {data.nickname}
            님, 요즘 어떤 책을 읽고 계신가요?
          </>
        }
      />
      <Link href={path.recordNew}>
        <SectionBody>
          <Card className={styles.card}>
            <Typography>기억이 흐려지지 않도록</Typography>
            <Typography>지금 바로 기록해보세요!</Typography>
            <Button as="div" theme="success" className={styles.button}>
              기록하기
            </Button>
            <Image
              src="/image/open_book.png"
              alt="펼쳐져 있는 책 이미지"
              width={300}
              height={130}
              className={styles.image}
            />
          </Card>
        </SectionBody>
      </Link>
    </Section>
  );
};

export default WelcomeSection;

"use client";

import { Button, Typography } from "chak-blocks/plain";
import Link from "next/link";
import path from "@/constants/path";
import { useAuth } from "@/providers/auth";

import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import { styles } from "./style.css";
import Image from "next/image";
import Card from "@/components/shared/card/card";

const WelcomeSection = () => {
  const {
    user: { nickname },
  } = useAuth();

  return (
    <Section className={styles.self}>
      <SectionHeader
        title={
          <>
            <strong>{nickname}</strong>님, 요즘 어떤 책을 읽고 계신가요?
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
              src="/image/ch_welcome.png"
              alt="인사하는 초록색 책 캐릭터"
              width={560}
              height={570}
              className={styles.image}
            />
          </Card>
        </SectionBody>
      </Link>
    </Section>
  );
};

export default WelcomeSection;

import { Metadata } from "next";
import RecordNewSection from "@/components/sections/record/new";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "기록 만들기 | 책에 관한 모든 기억을 Chak",
  description: "기록 만들기 페이지",
  openGraph: {
    title: "기록 만들기 | 책에 관한 모든 기억을 Chak",
    description: "기록 만들기 페이지",
    images: ["/image/og.jpg"],
  },
};

const RecordNewPage = () => {
  return (
    <main>
      <RecordNewSection />
    </main>
  );
};

export default RecordNewPage;

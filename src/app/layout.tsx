import type { Metadata } from "next";
import QueryProvider from "@/query/query-provider";
import Container from "@/components/responsive-container/responsive-container";

import "@/styles/reset.css";
import "@/styles/globals.css";
import "chak-blocks/plain/style.css";
import "chak-blocks/context/style.css";

export const metadata: Metadata = {
  title: "독서 기록 플랫폼 Chak.",
  description: "독서 기록 플랫폼 Chak와 책과 함께한 모든 순간을 기록해보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Container>{children}</Container>
        </QueryProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import AuthProvider from "@/providers/auth";
import QueryProvider from "@/providers/query";
import ToastProvider from "@/providers/toast";
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
        <ToastProvider>
          <QueryProvider>
            <AuthProvider>
              <Container>{children}</Container>
            </AuthProvider>
          </QueryProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

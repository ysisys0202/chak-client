import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // API 요청인지 페이지 요청인지 확인
  if (url.pathname.startsWith("/api/")) {
    console.log("API 요청:", url.pathname);
  } else {
    console.log("페이지 요청:", url.pathname);
  }

  // 쿠키 정보 출력
  console.log("All cookies:", request.cookies.getAll());
  console.log("Token cookie:", request.cookies.get("token"));

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // 모든 경로에 대해 미들웨어 실행
};

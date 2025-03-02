import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("🔄 Middleware 실행됨!");
  console.log("📌 요청 URL:", req.nextUrl.pathname);

  const token = req.cookies.get("token")?.value;
  console.log("🔑 Token:", token ?? "토큰 없음");

  if (token) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("Authorization", `Bearer ${token}`);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

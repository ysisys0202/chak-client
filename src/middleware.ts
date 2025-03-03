import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (req: NextRequest) => {
  const { pathname, search } = req.nextUrl;
  const isExclude = ["/auth/login", "/auth/signup", "/auth/logout"];
  if (isExclude.includes(pathname)) {
    return NextResponse.next();
  }

  const api = `${pathname.replace("/api", "")}${search}`;
  const method = req.method;
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const authHeader = req.headers.get("authorization");
  const body = method !== "GET" ? await req.json() : null;

  //TODO : headers 온전히 전달

  const options: RequestInit = {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : authHeader || "",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  const backendResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}${api}`,
    options
  );

  const responseBody = await backendResponse.json();

  return NextResponse.json(responseBody, {
    status: backendResponse.status,
  });
};

export const config = {
  matcher: "/api/:path*",
};

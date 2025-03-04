import { NextRequest, NextResponse } from "next/server";
import { getToken } from "@/util/auth";

export const middleware = async (req: NextRequest) => {
  const { pathname, search } = req.nextUrl;
  const excludedPaths = [
    "/api/auth/login",
    "/api/auth/signup",
    "/api/auth/logout",
  ];
  if (excludedPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const api = `${pathname.replace("/api", "")}${search}`;
  const method = req.method;

  const token = await getToken();
  const body = method !== "GET" ? await req.json() : null;

  //TODO : headers 온전히 전달

  const options: RequestInit = {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
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

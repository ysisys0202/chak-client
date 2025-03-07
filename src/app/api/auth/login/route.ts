export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { serverFetcher } from "@/api/server/fetcher";

export const POST = async (req: NextRequest) => {
  try {
    const { loginId, password } = await req.json();

    const data = await serverFetcher("/auth/login", {
      method: "POST",
      data: { loginId, password },
    });

    const response = NextResponse.json({ message: "로그인 성공" });
    const token = data.token;
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: error.response?.statusText || "로그인 실패" },
        { status: error.response?.status }
      );
    }
    return NextResponse.json({ message: "로그인 실패" }, { status: 500 });
  }
};

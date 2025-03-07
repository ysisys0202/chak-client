export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { serverFetcher } from "@/api/server/fetcher";

export const POST = async (req: NextRequest) => {
  try {
    const { nickname, loginId, email, password, profileImage } =
      await req.json();

    const data = await serverFetcher("/auth/signup", {
      method: "POST",
      data: { nickname, loginId, email, password, profileImage },
    });

    const response = NextResponse.json({ message: "회원가입 성공" });

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
        { message: error.response?.statusText || "회원가입 실패" },
        { status: error.response?.status }
      );
    }
    return NextResponse.json({ message: "로그인 실패" }, { status: 500 });
  }
};

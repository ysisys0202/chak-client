import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { apiFetcher } from "@/api/fetcher";

export const POST = async (req: NextRequest) => {
  try {
    console.log("login api 실행 🧶🧶🧶🧶🧶🧶");
    const { loginId, password } = await req.json();

    const data = await apiFetcher("/auth/login", {
      method: "POST",
      data: { loginId, password },
    });

    const response = NextResponse.json({ message: "로그인 성공" });
    console.log("token 😄😄😄😄😄", data.token);
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

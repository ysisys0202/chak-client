import { NextRequest, NextResponse } from "next/server";
import { serverFetcher } from "@/api/server/fetcher";
import { FetchError } from "@/util/error";

export const POST = async (req: NextRequest) => {
  try {
    const { loginId, password } = await req.json();

    const data = await serverFetcher("/auth/login", {
      method: "POST",
      body: JSON.stringify({ loginId, password }),
    });

    const loginResponse = NextResponse.json({ message: "로그인 성공" });

    const token = data.token;

    loginResponse.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return loginResponse;
  } catch (error) {
    if (error instanceof FetchError) {
      return NextResponse.json(
        { message: error.message || "로그인 실패" },
        { status: error.status }
      );
    }
    return NextResponse.json({ message: "로그인 실패" }, { status: 500 });
  }
};

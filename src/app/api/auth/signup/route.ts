import { NextRequest, NextResponse } from "next/server";
import { serverFetcher } from "@/api/server/fetcher";
import { FetchError } from "@/util/error";

export const POST = async (req: NextRequest) => {
  try {
    const { nickname, loginId, email, password, profileImage } =
      await req.json();

    const data = await serverFetcher("/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        nickname,
        loginId,
        email,
        password,
        profileImage,
      }),
    });

    const signupResponse = NextResponse.json({ message: "회원가입 성공" });

    const token = data.token;
    signupResponse.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return signupResponse;
  } catch (error) {
    if (error instanceof FetchError) {
      return NextResponse.json(
        { message: error.message || "회원가입 실패" },
        { status: error.status }
      );
    }
    return NextResponse.json({ message: "회원가입 실패" }, { status: 500 });
  }
};

import { NextResponse } from "next/server";

export const POST = async () => {
  console.log("😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍");
  const response = NextResponse.json({ message: "로그아웃 성공" });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0),
  });

  return response;
};

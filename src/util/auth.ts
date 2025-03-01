import { cookies } from "next/headers";

export const getToken = async () => {
  const cookie = await cookies();
  const token = cookie.get("token");
  if (!token || !token.value) {
    console.error("token이 존재하지 않습니다.");
    throw new Error("token이 존재하지 않습니다.");
  }
  return token.value;
};

import { cookies } from "next/headers";

export const getToken = async () => {
  const cookie = await cookies();
  console.log("cookie : ", cookie);
  const token = cookie.get("token");
  console.log("token : ", token?.name, token?.value);
  if (!token || !token.value) {
    console.error("token이 존재하지 않습니다.");
    throw new Error("token이 존재하지 않습니다.");
  }
  return token.value;
};

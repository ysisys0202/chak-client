import { getToken } from "@/util/auth";
import { getAuth } from "@/api/auth";
import { headers } from "next/headers";
const AuthGuard = async ({ children }: { children: React.ReactNode }) => {
  const headersList = await headers();
  console.log("auth guard headerList", headersList);
  const token = headersList
    .get("cookie")
    ?.split(";")
    .find((c) => c.trim().startsWith("token="))
    ?.split("=")[1];
  console.log("token", token);
  try {
    const token = await getToken();
    console.log("auth guard :", token);
    await getAuth({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return <>{children}</>;
  } catch (error) {
    console.error(error);
    // redirect(path.login);
  }
};

export default AuthGuard;

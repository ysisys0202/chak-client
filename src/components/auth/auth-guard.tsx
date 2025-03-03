import { redirect } from "next/navigation";
import { getToken } from "@/util/auth";
import { getAuth } from "@/api/auth";
import path from "@/constants/path";

const AuthGuard = async ({ children }: { children: React.ReactNode }) => {
  try {
    const token = await getToken();
    await getAuth({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return <>{children}</>;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      redirect(path.login);
    }
  }
};

export default AuthGuard;

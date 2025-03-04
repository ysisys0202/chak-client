import { redirect } from "next/navigation";
import { getAuthServer } from "@/api/server/auth";
import path from "@/constants/path";

const AuthGuard = async ({ children }: { children: React.ReactNode }) => {
  try {
    await getAuthServer();
    return <>{children}</>;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      redirect(path.login);
    }
  }
};

export default AuthGuard;

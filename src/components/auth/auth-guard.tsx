import { redirect } from "next/navigation";
import { getAuthServer } from "@/api/server/auth";
import path from "@/constants/path";
import queryKey from "@/constants/query-keys";

const AuthGuard = async ({ children }: { children: React.ReactNode }) => {
  try {
    await getAuthServer({
      fetchOptions: {
        cache: "force-cache",
        next: {
          tags: [queryKey.auth.me],
        },
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

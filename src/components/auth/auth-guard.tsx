import { getToken } from "@/util/auth";
import { getAuth } from "@/api/auth";

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
    console.error(error);
    // redirect(path.login);
  }
};

export default AuthGuard;

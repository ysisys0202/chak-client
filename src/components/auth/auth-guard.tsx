"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "chak-blocks/context";
import path from "@/constants/path";
import { useAuth } from "@/providers/auth";
import FullScreenLoader from "@/components/shared/loading/full-screen-loader";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { open } = useToast();
  const router = useRouter();
  const { user, isAuthenticated, isAuthenticating } = useAuth();

  // TODO : useToast open 함수를 useEffect의 dependency array에 추가하면 무한 렌더링 이슈 발생, chak-blocks 확인 필요
  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      open({ title: "로그인 후에 사용해주세요.", status: "error" });
      router.replace(path.login);
    }
  }, [user, isAuthenticating, isAuthenticated]);

  return (
    <>
      {isAuthenticating && <FullScreenLoader />}
      {children}
    </>
  );
};

export default AuthGuard;

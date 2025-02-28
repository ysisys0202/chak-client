"use client";

import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "chak-blocks/context";
import { Me } from "@/types/auth";
import path from "@/constants/path";
import { useAuthQuery } from "@/query/auth";
import FullScreenLoader from "@/components/shared/loading/full-screen-loader";

const AuthContext = createContext<{
  user: Me;
  isAuthenticated: boolean;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuthQuery();
  const { open } = useToast();

  // TODO : useToast open 함수를 useEffect의 dependency array에 추가하면 무한 렌더링 이슈 발생, chak-blocks 확인 필요
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      open({ title: "로그인 후에 사용해주세요.", status: "error" });
      router.replace(path.login);
    }
  }, [user, isLoading, isAuthenticated]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user: user || {
          loginId: "",
          nickname: "",
          id: 0,
          profileImage: "",
        },
        isAuthenticated,
      }}
    >
      {isLoading}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내부에서만 사용 가능합니다.");
  }
  return context;
};

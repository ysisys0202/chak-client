"use client";

import { createContext, useContext } from "react";
import { Me } from "@/types/auth";
import { useAuthQuery } from "@/query/auth";

const AuthContext = createContext<{
  user?: Me;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
} | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, isLoading: isAuthenticating } = useAuthQuery();

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isAuthenticated,
        isAuthenticating,
      }}
    >
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

export default AuthProvider;

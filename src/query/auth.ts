"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "chak-blocks/context";
import { login, logout, signup } from "@/api/client/auth";
import { LoginData, SignupData } from "@/util/validation/auth";
import path from "@/constants/path";
import { revalidateAuth } from "@/actions/revalidate-auth.action";
import { FetchError } from "@/util/error";

export const useSignupMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: (formData: SignupData) => signup(formData),
    onSuccess: () => {
      revalidateAuth();
      router.replace(path.home);
      open({ title: "회원가입 성공", status: "success" });
    },
    onError: (error) => {
      revalidateAuth();
      const fetchError = error as FetchError;
      open({
        title: "회원가입 실패",
        status: "error",
        description:
          fetchError.message || "회원가입에 실패했습니다. 잠시후 시도해주세요.",
      });
    },
  });
};

export const useLoginMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: (formData: LoginData) => login(formData),
    onSuccess: () => {
      revalidateAuth();
      router.replace(path.home);
      open({ title: "로그인 성공", status: "success" });
    },
    onError: (error) => {
      revalidateAuth();
      const fetchError = error as FetchError;
      open({
        title: "로그인 실패",
        status: "error",
        description:
          fetchError.message || "로그인에 실패했습니다. 잠시후 시도해주세요.",
      });
    },
  });
};

export const useLogoutMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      revalidateAuth();
      router.replace(path.login);
      open({ title: "로그아웃", status: "success" });
    },
    onError: (error) => {
      revalidateAuth();
      open({
        title: "로그아웃 실패",
        status: "error",
        description: error.message,
      });
    },
  });
};

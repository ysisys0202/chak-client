"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "chak-blocks/context";
import { login, signup } from "@/api/auth";
import { LoginData, SignupData } from "@/util/validation/auth";
import path from "@/constants/path";

export const useSignupMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: (formData: SignupData) => signup(formData),
    onSuccess: () => {
      router.push(path.home);
      open({ title: "회원가입 성공", status: "success" });
    },
    onError: (error) => {
      open({
        title: "회원가입 실패",
        status: "error",
        description: error.message,
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
      router.push(path.home);
      open({ title: "로그인 성공", status: "success" });
    },
    onError: (error) => {
      open({
        title: "로그인 실패",
        status: "error",
        description: error.message,
      });
    },
  });
};

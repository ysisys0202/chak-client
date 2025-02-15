import { z } from "zod";

export const LoginSchema = z.object({
  loginId: z.string().min(1, "아이디를 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요."),
});

export const SignupSchema = z
  .object({
    email: z.string().email({
      message: "유효한 이메일이 아니에요.",
    }),
    nickname: z
      .string()
      .trim()
      .min(2, {
        message: "닉네임은 2자 이상이어야 해요.",
      })
      .max(8, {
        message: "닉네임은 8자 이하여야 해요.",
      }),
    profileImage: z.string().optional(),
  })
  .merge(LoginSchema);

export const SignupClientSchema = z
  .object({
    confirmPassword: z.string().min(1, "비밀번호를 다시 입력해주세요."),
  })
  .merge(SignupSchema)
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않아요.",
    path: ["confirmPassword"],
  });

export type SignupData = z.infer<typeof SignupSchema>;

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, InputField } from "chak-blocks/plain";
import { LoginData, LoginSchema } from "@/util/validation/auth";
import { loginFormStyles } from "./style.css";
import Link from "next/link";
import { useLoginMutation } from "@/query/auth";
import Spinner from "@/components/shared/loading/loading-spinner";

type FieldNames = "loginId" | "password";

type SignupFormField = {
  id: FieldNames;
  label: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
};

const loginFormFileds: SignupFormField[] = [
  {
    id: "loginId",
    label: "아이디",
    type: "text",
    isRequired: true,
    placeholder: "아이디를 입력해주세요",
  },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    isRequired: true,
    placeholder: "비밀번호를 입력해주세요",
  },
];

const LoginForm = ({ className }: { className: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });
  const { mutate, isPending } = useLoginMutation();
  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <>
      {isPending && <Spinner className={loginFormStyles.loadingSpinner} />}
      <form
        className={`${loginFormStyles.self} ${className}`}
        onSubmit={onSubmit}
      >
        <div className={loginFormStyles.fields}>
          {loginFormFileds.map(({ id, label, type, placeholder }) => (
            <InputField
              key={id}
              id={id}
              label={label}
              direction="vertical"
              className={loginFormStyles.field}
            >
              <Input
                type={type}
                placeholder={placeholder}
                theme={errors[id] ? "error" : "primary"}
                className={loginFormStyles.input}
                {...register(id)}
              />
            </InputField>
          ))}
        </div>
        <div className={loginFormStyles.buttonArea}>
          <Button disabled={isSubmitting || isPending}>로그인</Button>
          <Link href="/signup">
            <Button as="div" variant="outlined" theme="dark">
              회원가입
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

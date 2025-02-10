"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button, Input } from "chak-blocks/plain";
import { SignupSchema } from "@/util/validation/auth";
import { signupFormStyles } from "./style.css";

type FieldNames =
  | "loginId"
  | "password"
  | "confirmPassword"
  | "email"
  | "nickname";

type FormData = {
  [key in FieldNames]: string;
};

type SignupFormField = {
  id: FieldNames;
  label: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
};

const signupFormFileds: SignupFormField[] = [
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
  {
    id: "confirmPassword",
    label: "비밀번호 확인",
    type: "password",
    isRequired: true,
    placeholder: "비밀번호 다시 한번 입력해주세요",
  },
  {
    id: "email",
    label: "이메일",
    type: "email",
    isRequired: true,
    placeholder: "이메일을 입력해주세요",
  },
  {
    id: "nickname",
    label: "닉네임 (화면에 보여질 이름)",
    type: "nickname",
    isRequired: true,
    placeholder: "닉네임을 입력해주세요",
  },
];

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={signupFormStyles.self} onSubmit={onSubmit}>
      <div className={signupFormStyles.fileds}>
        {signupFormFileds.map(
          ({ id, label, type, isRequired, placeholder }) => (
            <InputField
              key={id}
              label={label}
              direction="vertical"
              isRequired={isRequired}
              errorText={errors[id] ? errors[id].message : undefined}
            >
              <Input
                type={type}
                placeholder={placeholder}
                className={signupFormStyles.input}
                theme={errors[id] ? "error" : "primary"}
                {...register(id)}
              />
            </InputField>
          )
        )}
      </div>
      <Button disabled={isSubmitting} className={signupFormStyles.button}>
        가입하기
      </Button>
    </form>
  );
};

export default SignupForm;

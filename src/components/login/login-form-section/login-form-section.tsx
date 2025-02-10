import { Typography } from "chak-blocks/plain";
import LoginForm from "@/components/login/login-form/login-form";
import { loginFormSectionStyles } from "./style.css";

const LoginFormSection = () => {
  return (
    <section className={loginFormSectionStyles.self}>
      <Typography as="h1" variant="title2" theme="tertiary">
        Chak 로그인 하기
      </Typography>
      <LoginForm className={loginFormSectionStyles.form} />
    </section>
  );
};

export default LoginFormSection;

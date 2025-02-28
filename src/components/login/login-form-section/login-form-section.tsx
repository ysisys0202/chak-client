import { Typography } from "chak-blocks/plain";
import { shades } from "@/constants/colors";
import LoginForm from "@/components/login/login-form/login-form";
import { styles } from "./style.css";

const LoginFormSection = () => {
  return (
    <section className={styles.self}>
      <Typography as="h1" variant="title2" color={shades[800]}>
        로그인
      </Typography>
      <LoginForm className={styles.form} />
    </section>
  );
};

export default LoginFormSection;

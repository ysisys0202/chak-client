import LoginIntroSection from "@/components/login/login-intro-section/login-intro-section";
import LoginFormSection from "@/components/login/login-form-section/login-form-section";
import { loginPageStyles } from "./style.css";

const LoginPage = () => {
  return (
    <main className={loginPageStyles.self}>
      <div className={loginPageStyles.container}>
        <LoginIntroSection className={loginPageStyles.intro} />
        <LoginFormSection />
      </div>
    </main>
  );
};

export default LoginPage;

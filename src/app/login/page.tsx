import LoginFormSection from "@/components/login/login-form-section/login-form-section";
import { loginPageStyles } from "./style.css";

const LoginPage = () => {
  return (
    <main className={loginPageStyles.self}>
      <div className={loginPageStyles.container}>
        <LoginFormSection />
      </div>
    </main>
  );
};

export default LoginPage;

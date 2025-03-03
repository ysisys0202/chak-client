import { Metadata } from "next";
import LoginFormSection from "@/components/login/login-form-section/login-form-section";
import { loginPageStyles } from "./style.css";

export const metadata: Metadata = {
  title: "로그인 | 책에 관한 모든 기억을 Chak",
  description: "Chak 로그인 페이지",
  openGraph: {
    title: "로그인 - 책에 관한 모든 기억을 Chak",
    description: "Chak 로그인 페이지",
    images: ["/image/og.jpg"],
  },
};

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

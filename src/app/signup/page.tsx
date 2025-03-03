import { Metadata } from "next";
import { Typography } from "chak-blocks/plain";
import SignupForm from "@/components/signup-form/signup-form";
import { signupPageStyle } from "./style.css";

export const metadata: Metadata = {
  title: "회원가입 | 책에 관한 모든 기억을 Chak",
  description: "Chak 회원가입 페이지",
  openGraph: {
    title: "회원가입 | 책에 관한 모든 기억을 Chak",
    description: "Chak 회원가입 페이지",
    images: ["/image/og.jpg"],
  },
};

const SignupPage = () => {
  return (
    <main className={signupPageStyle}>
      <Typography variant="title2" as="h1">
        회원정보 입력
      </Typography>
      <SignupForm />
    </main>
  );
};

export default SignupPage;

import SignupForm from "@/components/signup-form/signup-form";
import { signupPageStyle } from "./style.css";
import { Typography } from "chak-blocks/plain";

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

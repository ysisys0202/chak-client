import { fetcher } from "@/api/fetcher";
import { SignupData } from "@/util/validation/auth";

export const signup = (formData: SignupData) => {
  return fetcher(`/auth/signup`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

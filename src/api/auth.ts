import { fetcher } from "@/api/fetcher";
import { Me } from "@/types/auth";
import { LoginData, SignupData } from "@/util/validation/auth";

export const signup = (formData: SignupData) => {
  return fetcher(`/auth/signup`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const login = (formData: LoginData) => {
  return fetcher(`/auth/login`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const logout = () => {
  return fetcher("/auth/logout", {
    method: "POST",
  });
};

export const getAuth = (): Promise<Me> => {
  return fetcher("/auth/me");
};

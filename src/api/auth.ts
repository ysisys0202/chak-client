import { AxiosRequestConfig } from "axios";
import { clientFetcher } from "@/api/fetcher";
import { Me } from "@/types/auth";
import { LoginData, SignupData } from "@/util/validation/auth";

export const signup = (formData: SignupData) => {
  return clientFetcher(`/auth/signup`, {
    method: "POST",
    data: formData,
  });
};

export const login = (formData: LoginData) => {
  return clientFetcher(`/auth/login`, {
    method: "POST",
    data: formData,
  });
};

export const logout = () => {
  return clientFetcher("/auth/logout", {
    method: "POST",
  });
};

export const getAuth = (options: AxiosRequestConfig = {}): Promise<Me> => {
  return clientFetcher("/auth/me", options);
};

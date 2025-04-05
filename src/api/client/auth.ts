import { clientFetcher } from "@/api/client/fetcher";
import { Me } from "@/types/auth";
import { LoginData, SignupData } from "@/util/validation/auth";

export const signup = (formData: SignupData) => {
  return clientFetcher(`/auth/signup`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const login = (formData: LoginData) => {
  return clientFetcher(`/auth/login`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const logout = () => {
  return clientFetcher("/auth/logout", {
    method: "POST",
  });
};

export const getAuth = (options: RequestInit = {}): Promise<Me> => {
  return clientFetcher("/auth/me", options);
};

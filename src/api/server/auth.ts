import { AxiosRequestConfig } from "axios";
import { Me } from "@/types/auth";
import { serverFetcher } from "@/api/server/fetcher";

export const getAuthServer = (
  options: AxiosRequestConfig = {}
): Promise<Me> => {
  return serverFetcher("/auth/me", options);
};

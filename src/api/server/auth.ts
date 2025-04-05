import { Me } from "@/types/auth";
import { serverFetcher } from "@/api/server/fetcher";

export const getAuthServer = (options: RequestInit = {}): Promise<Me> => {
  return serverFetcher("/auth/me", options);
};

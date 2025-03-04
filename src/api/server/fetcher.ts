import { AxiosRequestConfig } from "axios";
import { getToken } from "@/util/auth";
import { createAxiosInstance, fetcher } from "@/api/fetcher";

const serverAxios = createAxiosInstance(
  process.env.NEXT_PUBLIC_API_DOMAIN || ""
);

export const serverFetcher = async (
  api: string,
  options?: AxiosRequestConfig
) => {
  const token = await getToken();
  return fetcher(serverAxios, api, {
    options: {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${token}`,
      },
    },
  });
};

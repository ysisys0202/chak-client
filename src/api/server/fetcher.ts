import { getToken } from "@/util/auth";
import { fetcher } from "@/api/fetcher";

export const serverFetcher = async (api: string, options?: RequestInit) => {
  const token = await getToken();
  return fetcher(process.env.NEXT_PUBLIC_API_DOMAIN || "", api, {
    options: {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${token}`,
      },
    },
  });
};

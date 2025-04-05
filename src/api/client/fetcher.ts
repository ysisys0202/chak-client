import { fetcher } from "@/api/fetcher";

export const clientFetcher = (api: string, options?: RequestInit) =>
  fetcher(`${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/api`, api, { options });

import { AxiosRequestConfig } from "axios";
import { createAxiosInstance, fetcher } from "@/api/fetcher";

const clientAxios = createAxiosInstance(
  `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/api` || ""
);

export const clientFetcher = (api: string, options?: AxiosRequestConfig) =>
  fetcher(clientAxios, api, { options });

import axios, { AxiosError, AxiosRequestConfig, AxiosInstance } from "axios";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const createAxiosInstance = (baseURL: string) =>
  axios.create({ baseURL, ...defaultOptions });

const clientAxios = createAxiosInstance(
  `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/api` || ""
);
const apiAxios = createAxiosInstance(process.env.NEXT_PUBLIC_API_DOMAIN || "");

const fetcher = async (
  axiosClient: AxiosInstance,
  api: string,
  {
    options = {},
    onSuccess,
    onError,
  }: {
    options?: AxiosRequestConfig;
    onSuccess?: (data: unknown) => void;
    onError?: (error: AxiosError) => void;
  } = {}
) => {
  try {
    const response = await axiosClient({ url: api, ...options });
    onSuccess?.(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      onError?.(error);
      throw error;
    }
    throw new Error(
      error instanceof Error ? error.message : "예기치 못한 에러"
    );
  }
};

export const clientFetcher = (api: string, options?: AxiosRequestConfig) =>
  fetcher(clientAxios, api, { options });

export const apiFetcher = (api: string, options?: AxiosRequestConfig) =>
  fetcher(apiAxios, api, { options });

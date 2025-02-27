import axios, { AxiosError, AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const fetcher = async (
  api: string,
  {
    options,
    onSuccess,
    onError,
  }: {
    options?: AxiosRequestConfig;
    onSuccess?: (data: unknown) => void;
    onError?: (error: AxiosError) => void;
  } = {}
) => {
  try {
    const { headers, data, method } = options || {};

    const response = await axiosClient({
      url: api,
      method,
      headers,
      data,
      ...options,
    });

    onSuccess?.(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      onError?.(error);
      throw error;
    }
    throw new Error(
      "예상치 못한 에러가 발생했습니다. 잠시 후 다시 시도해주세요."
    );
  }
};

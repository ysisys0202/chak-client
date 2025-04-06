import { FetchError } from "@/util/error";

export const fetcher = async (
  baseUrl: string,
  api: string,
  {
    options = {},
    onSuccess,
    onError,
  }: {
    options?: RequestInit;
    onSuccess?: (data: unknown) => void;
    onError?: (error: FetchError) => void;
  } = {}
) => {
  try {
    const response = await fetch(`${baseUrl}${api}`, {
      credentials: "include",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    if (!response.ok) {
      const error = await response.json();

      const fetchError = new FetchError({
        status: response.status,
        message: error.message || response.statusText,
      });

      console.error(fetchError);

      throw fetchError;
    }
    const data = await response.json();
    onSuccess?.(data.data);

    return data;
  } catch (error) {
    const fetchError = error as FetchError;

    console.error(fetchError);
    onError?.(fetchError);

    throw fetchError;
  }
};

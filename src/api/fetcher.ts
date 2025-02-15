const defaultHeaders = {
  "Content-Type": "application/json",
};

export const fetcher = async (api: string, options?: RequestInit) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${api}`,
      {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options?.headers,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`fetch error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("fetch error:", error.message);
      throw new Error(error.message);
    }
  }
};

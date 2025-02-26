export const generateQueryString = (
  params: Record<string, string | number | undefined | boolean>
) => {
  return Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");
};

export const addQueryParam = (
  url: string,
  name: string,
  value: string
): string => {
  const [path, queryString] = url.split("?");
  const newParams = new URLSearchParams(queryString);
  newParams.set(name, value);

  const newQueryString = newParams.toString();
  return newQueryString ? `${path}?${newQueryString}` : path;
};

export const removeQueryParam = (
  url: string,
  paramToRemove: string
): string => {
  const [path, queryString] = url.split("?");
  const newParams = new URLSearchParams(queryString);
  newParams.delete(paramToRemove);

  const newQueryString = newParams.toString();
  return newQueryString ? `${path}?${newQueryString}` : path;
};

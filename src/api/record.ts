import { fetcher } from "@/api/fetcher";
import { RecordItemResponse, RecordResponse } from "@/types/record";
import { generateQueryString } from "@/util/url";
import { RecordData } from "@/util/validation/record";

type GetRecordsOptions = {
  userId?: number;
  start?: number;
  display?: number;
};

export const getRecords = (
  options?: GetRecordsOptions
): Promise<RecordResponse> => {
  const queryParams = generateQueryString({
    ...options,
  });
  return fetcher(`/records?${queryParams}`);
};

export const getRecord = (id: number): Promise<RecordItemResponse> => {
  return fetcher(`/records/${id}`);
};

export const createRecord = (
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return fetcher(`/records/`, {
    method: "POST",
    body: JSON.stringify(recordData),
  });
};

export const updateRecord = (
  id: number,
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return fetcher(`/records/${id}`, {
    method: "PUT",
    body: JSON.stringify(recordData),
  });
};

export const deleteRecord = (id: number) => {
  return fetcher(`/records/${id}`, {
    method: "DELETE",
  });
};

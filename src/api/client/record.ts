import {
  ReadingStates,
  RecordItemResponse,
  RecordResponse,
} from "@/types/record";
import { clientFetcher } from "@/api/client/fetcher";
import { RecordData } from "@/util/validation/record";
import { generateQueryString } from "@/util/url";

export type GetRecordsOptions = {
  userId?: number;
  start?: number;
  display?: number;
  readingState?: ReadingStates;
};

export const getRecords = (
  queryOptions: GetRecordsOptions,
  options: RequestInit = {}
): Promise<RecordResponse> => {
  const queryParams = generateQueryString({
    ...queryOptions,
  });
  return clientFetcher(`/records?${queryParams}`, options);
};

export const createRecord = (
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return clientFetcher(`/records/`, {
    method: "POST",
    body: JSON.stringify(recordData),
  });
};

export const updateRecord = (
  id: number,
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return clientFetcher(`/records/${id}`, {
    method: "PUT",
    body: JSON.stringify(recordData),
  });
};

export const deleteRecord = (id: number) => {
  return clientFetcher(`/records/${id}`, { method: "DELETE" });
};

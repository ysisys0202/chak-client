import { AxiosRequestConfig } from "axios";
import {
  ReadingStates,
  RecordCountByReadingStateResponse,
  RecordItemResponse,
  RecordResponse,
} from "@/types/record";
import { clientFetcher } from "@/api/fetcher";
import { generateQueryString } from "@/util/url";
import { RecordData } from "@/util/validation/record";

export type GetRecordsOptions = {
  userId?: number;
  start?: number;
  display?: number;
  readingState?: ReadingStates;
};

export const getRecords = (
  queryOptions: GetRecordsOptions,
  options: AxiosRequestConfig = {}
): Promise<RecordResponse> => {
  const queryParams = generateQueryString({
    ...queryOptions,
  });
  return clientFetcher(`/records?${queryParams}`, options);
};

export const getRecord = (
  id: number,
  options: AxiosRequestConfig = {}
): Promise<RecordItemResponse> => {
  return clientFetcher(`/records/${id}`, options);
};

export const getRecordCountByReadingState = (
  options: AxiosRequestConfig = {}
): Promise<RecordCountByReadingStateResponse> => {
  return clientFetcher(`/records/count/by-reading-state`, options);
};

export const createRecord = (
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return clientFetcher(`/records/`, {
    method: "POST",
    data: recordData,
  });
};

export const updateRecord = (
  id: number,
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return clientFetcher(`/records/${id}`, {
    method: "PUT",
    data: recordData,
  });
};

export const deleteRecord = (id: number) => {
  return clientFetcher(`/records/${id}`, { method: "DELETE" });
};

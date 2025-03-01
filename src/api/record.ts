import { AxiosRequestConfig } from "axios";
import {
  ReadingStates,
  RecordCountByReadingStateResponse,
  RecordItemResponse,
  RecordResponse,
} from "@/types/record";
import { fetcher } from "@/api/fetcher";
import { generateQueryString } from "@/util/url";
import { RecordData } from "@/util/validation/record";

export type GetRecordsOptions = {
  userId?: number;
  start?: number;
  display?: number;
  readingState?: ReadingStates;
};

export const getRecords = (
  options?: GetRecordsOptions
): Promise<RecordResponse> => {
  const queryParams = generateQueryString({
    ...options,
  });
  return fetcher(`/records?${queryParams}`);
};

export const getRecord = (
  id: number,
  options: AxiosRequestConfig = {}
): Promise<RecordItemResponse> => {
  return fetcher(`/records/${id}`, { options });
};

export const getRecordCountByReadingState =
  (): Promise<RecordCountByReadingStateResponse> => {
    return fetcher(`/records/count/by-reading-state`);
  };

export const createRecord = (
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return fetcher(`/records/`, {
    options: {
      method: "POST",
      data: recordData,
    },
  });
};

export const updateRecord = (
  id: number,
  recordData: RecordData
): Promise<RecordItemResponse> => {
  return fetcher(`/records/${id}`, {
    options: {
      method: "PUT",
      data: recordData,
    },
  });
};

export const deleteRecord = (id: number) => {
  return fetcher(`/records/${id}`, {
    options: { method: "DELETE" },
  });
};

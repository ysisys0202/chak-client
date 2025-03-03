import { useRouter } from "next/navigation";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "chak-blocks/context";
import {
  createRecord,
  deleteRecord,
  getRecord,
  getRecordCountByReadingState,
  getRecords,
  updateRecord,
} from "@/api/record";
import path from "@/constants/path";
import queryKey from "@/constants/query-keys";
import { RecordData } from "@/util/validation/record";

export const useRecordsInfiniteQuery = (userId?: number) => {
  const display = 12;
  return useInfiniteQuery({
    queryKey: [queryKey.records.list, userId],
    queryFn: ({ pageParam }) => {
      const nextPageItem = (pageParam - 1) * display;
      return getRecords({ userId, start: nextPageItem, display });
    },
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      const isLast = lastPage.start >= lastPage.total;
      if (isLast) {
        return undefined;
      }
      return (lastPage.start + display) / display + 1;
    },
  });
};

export const useRecordCountByReadingState = () => {
  return useQuery({
    queryKey: [queryKey.records.countByReadingState],
    queryFn: getRecordCountByReadingState,
  });
};

export const useRecordQuery = (id: number) => {
  return useQuery({
    queryKey: [queryKey.records.one, id],
    queryFn: () => getRecord(id),
  });
};

export const useCreateRecordMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: createRecord,
    onSuccess: (data) => {
      open({ title: "기록이 성공적으로 추가되었어요." });
      router.replace(`${path.record}/${data.id}`);
    },
  });
};

export const useUpdateRecordMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: ({ id, recordData }: { id: number; recordData: RecordData }) =>
      updateRecord(id, recordData),
    onSuccess: (data) => {
      open({ title: "기록이 성공적으로 수정되었어요." });
      router.replace(`${path.record}/${data.id}`);
    },
  });
};

export const useDeleteRecordMutation = () => {
  const router = useRouter();
  const { open } = useToast();

  return useMutation({
    mutationFn: (id: number) => deleteRecord(id),
    onSuccess: () => {
      open({ title: "기록이 삭제되었어요." });
      router.replace(`${path.record}`);
    },
  });
};

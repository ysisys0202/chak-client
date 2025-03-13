"use server";

import { revalidateTag } from "next/cache";
import queryKey from "@/constants/query-keys";

export const revalidateRecords = async () => {
  revalidateTag(queryKey.records.list);
};

"use server";

import { revalidateTag } from "next/cache";
import queryKey from "@/constants/query-keys";

export const revalidateAuth = async () => {
  revalidateTag(queryKey.auth.me);
};

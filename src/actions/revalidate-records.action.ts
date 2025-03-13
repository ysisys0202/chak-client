"use server";

import { revalidatePath } from "next/cache";

export const revalidateRecords = async () => {
  revalidatePath("/record");
};

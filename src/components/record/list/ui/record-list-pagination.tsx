"use client";

import { useRouter, useSearchParams } from "next/navigation";
import path from "@/constants/path";
import { addQueryParam } from "@/util/url";
import { combineClassNames } from "@/util/common";
import Pagination from "@/components/shared/pagination/pagination";

type Props = {
  total: number;
  display: number;
  className?: string;
};

const RecordListPagination = ({ total, display, className }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const classNames = combineClassNames(className);

  const handlePagination = (value: number) => {
    router.push(
      `${addQueryParam(
        `${path.record}?${searchParams}`,
        "page",
        String(value)
      )}`
    );
  };
  return (
    <Pagination
      totalPage={Math.ceil(total / display)}
      currentPage={page}
      onPagination={handlePagination}
      className={classNames}
    />
  );
};

export default RecordListPagination;

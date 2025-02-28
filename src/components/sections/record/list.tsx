"use client";

import { ChangeEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "chak-blocks/plain";
import path from "@/constants/path";
import { readingStateMessage } from "@/constants/message";
import { useAuth } from "@/providers/auth";
import { addQueryParam } from "@/util/url";
import { useRecordsQuery } from "@/query/record";
import { ReadingStates } from "@/types/record";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import List from "@/components/shared/list/list";
import Pagination from "@/components/shared/pagination/pagination";
import RecordRow from "@/components/record-row/record-row";
import Select from "@/components/shared/select/select";
import { listStyles } from "./style.css";

const display = 10;

const RecordListSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const readingState = searchParams.get("reading-state") as
    | ReadingStates
    | undefined;
  const start = (page - 1) * display + 1;

  const {
    user: { id },
  } = useAuth();

  const { data } = useRecordsQuery({
    userId: id,
    start: start - 1,
    display,
    readingState,
  });

  const handlePagination = (value: number) => {
    router.push(
      `${addQueryParam(
        `${path.record}?${searchParams}`,
        "page",
        String(value)
      )}`
    );
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const readingState = event.target.value;

    if (readingState === "all") {
      router.replace(path.record);
      return;
    }
    router.replace(
      addQueryParam(
        `${path.record}?${searchParams}`,
        "reading-state",
        event.currentTarget.value
      )
    );
  };
  return (
    <Section>
      <SectionHeader title="나의 기록" />
      <SectionBody>
        <div className={listStyles.utilArea}>
          <Select
            name="reading-state-filter"
            id=""
            defaultValue={readingState || ""}
            onChange={handleSelectChange}
          >
            <option disabled value="">
              독서 상태
            </option>
            <option value="all">전체</option>

            {Object.entries(readingStateMessage).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Link href={path.recordNew}>
            <Button theme="success">새 기록 추가</Button>
          </Link>
        </div>
        <List>
          <RecordRow id="header" bookTitle="제목" updatedAt="작성일" header />
          {data?.items?.map(({ id, bookImage, bookTitle, updatedAt }) => (
            <RecordRow
              key={id}
              id={id}
              coverImageUrl={bookImage}
              bookTitle={bookTitle}
              updatedAt={updatedAt}
            />
          ))}
        </List>
        <Pagination
          totalPage={data ? Math.ceil(data.total / data.display) : 0}
          currentPage={page}
          onPagination={handlePagination}
          className={listStyles.pagination}
        />
      </SectionBody>
    </Section>
  );
};

export default RecordListSection;

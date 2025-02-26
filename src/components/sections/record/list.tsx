"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "chak-blocks/plain";
import path from "@/constants/path";
import { useAuth } from "@/providers/auth";
import { useRecordsQuery } from "@/query/record";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import List from "@/components/shared/list/list";
import Pagination from "@/components/shared/pagination/pagination";
import RecordRow from "@/components/record-row/record-row";
import { listStyles } from "./style.css";

const display = 10;

const RecordListSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const start = (page - 1) * display + 1;

  const {
    user: { id },
  } = useAuth();

  const { data } = useRecordsQuery({
    userId: id,
    start: start - 1,
    display,
  });

  const handlePagination = (value: number) => {
    router.push(`${path.record}?page=${value}`);
  };

  return (
    <Section>
      <SectionHeader title="나의 기록" />
      <SectionBody>
        <Link href={path.recordNew} className={listStyles.newButton}>
          <Button theme="success">새 기록 추가</Button>
        </Link>
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

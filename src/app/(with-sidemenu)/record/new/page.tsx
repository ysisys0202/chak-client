import RecordNewSection from "@/components/sections/record/new";
import React from "react";

export type NewPageQueryParams = { "book-search-modal": string };

const RecordNewPage = async ({
  searchParams,
}: {
  searchParams: Promise<NewPageQueryParams>;
}) => {
  const queryParams = await searchParams;
  return (
    <main>
      <RecordNewSection queryParams={queryParams} />
    </main>
  );
};

export default RecordNewPage;

"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Me } from "@/types/auth";
import { useRecordsInfiniteQuery } from "@/query/record";
import RecordCard from "@/components/record/card/record-card";
import { styles } from "./style.css";

const RecordsEmpty = () => {
  return <div>아직 작성된 기록이 없어요</div>;
};

const RecentRecords = ({ user }: { user: Me }) => {
  const { data, isFetching, fetchNextPage, hasNextPage, isFetched } =
    useRecordsInfiniteQuery(user?.id || 0);
  const { ref: triggerRef, inView } = useInView();

  const isEmpty = isFetched && data?.pages[0].items.length === 0;

  useEffect(() => {
    if (inView && hasNextPage && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);
  return (
    <div>
      {" "}
      <>
        {isEmpty && <RecordsEmpty />}
        {!isEmpty && (
          <ul className={styles.self}>
            {data?.pages.map((page) =>
              page.items.map(
                ({
                  id,
                  title,
                  recordDetail,
                  bookImage,
                  bookTitle,
                  updatedAt,
                  rating,
                }) => (
                  <li key={id}>
                    <RecordCard
                      id={id}
                      title={title}
                      description={recordDetail}
                      coverImageUrl={bookImage}
                      bookTitle={bookTitle}
                      updatedAt={updatedAt}
                      rating={rating}
                    />
                  </li>
                )
              )
            )}
          </ul>
        )}
        <div ref={triggerRef}></div>
      </>
    </div>
  );
};

export default RecentRecords;

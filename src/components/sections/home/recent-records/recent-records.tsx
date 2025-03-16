import queryKey from "@/constants/query-keys";
import { getAuthServer } from "@/api/server/auth";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import RecentRecords from "@/components/recent-records/recent-records";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getRecordsServer } from "@/api/server/record";

const RecentRecordsSection = async () => {
  const user = await getAuthServer({
    fetchOptions: {
      cache: "force-cache",
      next: {
        tags: [queryKey.auth.me],
      },
    },
  });

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKey.records.list, user.id],
    queryFn: ({ pageParam }) => {
      const nextPageItem = (pageParam - 1) * 12;
      return getRecordsServer({
        userId: user.id,
        start: nextPageItem,
        display: 12,
      });
    },
    initialPageParam: 1,
  });

  return (
    <Section>
      <SectionHeader
        title="최근 기록 📚"
        description="기록을 차곡 차곡 쌓아보세요"
      />
      <SectionBody>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <RecentRecords user={user} />
        </HydrationBoundary>
      </SectionBody>
    </Section>
  );
};

export default RecentRecordsSection;

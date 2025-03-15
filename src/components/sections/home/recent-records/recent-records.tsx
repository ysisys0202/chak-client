import queryKey from "@/constants/query-keys";
import { getAuthServer } from "@/api/server/auth";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import RecentRecords from "@/components/recent-records/recent-records";

const RecentRecordsSection = async () => {
  const user = await getAuthServer({
    fetchOptions: {
      cache: "force-cache",
      next: {
        tags: [queryKey.auth.me],
      },
    },
  });

  return (
    <Section>
      <SectionHeader
        title="최근 기록 📚"
        description="기록을 차곡 차곡 쌓아보세요"
      />
      <SectionBody>
        <RecentRecords user={user} />
      </SectionBody>
    </Section>
  );
};

export default RecentRecordsSection;

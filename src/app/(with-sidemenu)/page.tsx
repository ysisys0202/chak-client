import WelcomeSection from "@/components/sections/home/welcome/welcome";
import RecordStatusSection from "@/components/sections/home/record-status/record-status";
import RecentRecordsSection from "@/components/sections/home/recent-records/recent-records";
import { styles } from "./page.css";

const HomePage = () => {
  return (
    <main className={styles.self}>
      <WelcomeSection />
      <RecordStatusSection />
      <RecentRecordsSection />
    </main>
  );
};

export default HomePage;

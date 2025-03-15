import AuthGuard from "@/components/auth/auth-guard";
import Sidemenu from "@/components/sidemenu/sidemenu";
import { styles } from "./style.css";
import SidemenuButton from "@/components/sidemenu/button/sidemenu-button";
import SidemenuProvider from "@/providers/sidemenu";

const SidemenuLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <SidemenuProvider>
        <div className={styles.self}>
          <SidemenuButton className={styles.sidemenuButton} />
          <Sidemenu className={styles.sidemenu} />
          <div className={styles.content}> {children}</div>
        </div>
      </SidemenuProvider>
    </AuthGuard>
  );
};

export default SidemenuLayout;

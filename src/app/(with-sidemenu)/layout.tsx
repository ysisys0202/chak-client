import AuthGuard from "@/components/auth/auth-guard";
import Sidemenu from "@/components/sidemenu/sidemenu";
import SidemenuButton from "@/components/sidemenu/button/sidemenu-button";
import { styles } from "./style.css";

const SidemenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <div className={styles.self}>
        <SidemenuButton className={styles.button} />
        <Sidemenu className={styles.sidemenu} />
        <div className={styles.content}> {children}</div>
      </div>
    </AuthGuard>
  );
};

export default SidemenuLayout;

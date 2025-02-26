import { AuthProvider } from "@/providers/auth";
import Sidemenu from "@/components/sidemenu/sidemenu";
import SidemenuButton from "@/components/sidemenu/button/sidemenu-button";
import { styles } from "./style.css";

const SidemenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className={styles.self}>
        <SidemenuButton className={styles.button} />
        <Sidemenu className={styles.sidemenu} />
        <div className={styles.content}> {children}</div>
      </div>
    </AuthProvider>
  );
};

export default SidemenuLayout;
